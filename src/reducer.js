import { Auth, API } from "aws-amplify";

export const initialState = {
  basket: [],
  user: null
};

// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => (item.price * item.amount) + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      let sameItem = false;
      for (let product of state.basket) {
        if (action.item.id === product.id) {
          product['amount'] += 1;
          sameItem = true;
          break;
        }
      }
      if (!sameItem) {
        action.item['amount'] = 1;
        state.basket = [...state.basket, action.item];
      }
      console.log(state.basket);
      Auth.currentAuthenticatedUser()
        .then(user => {
          API.patch("user", "/user/updateCart", { body: { username: user.username, basket: state.basket } })
            .then(data => console.log(data))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
      return {
        ...state,
        basket: state.basket
      }

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }

      Auth.currentAuthenticatedUser()
      .then(user => {
        API.patch("user", "/user/updateCart", { body: { username: user.username, basket: state.basket } })
          .then(data => console.log(data))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))

      return {
        ...state,
        basket: newBasket
      }
    
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    case "PURCHASE":
      console.log(state.basket);
      Auth.currentAuthenticatedUser()
        .then(user => {
          API.patch("user", "/user/updatePurchases", {
            body: { username: user.username, basket: state.basket }
          })
          .then(data => {
            console.log(data)
            API.patch("user", "/user/updateCart", { body: { username: user.username, basket: [] } })
          })
          .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
        action.link("/")
      return {
        ...state,
        basket: []
      }

    default:
      return state;
  }
};

export default reducer;
