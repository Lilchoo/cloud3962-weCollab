import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout-header">
          <h3>Hello, {user === null ? "Guest" : user?.email}</h3>
          <h3 className="checkout-title">Your shopping Basket</h3>
        </div>

        <div className="checkout-body">
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

      <div className="checkout-footer">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
