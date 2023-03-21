import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// AWS Amplify logic
import { Amplify, API, Hub } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports)

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

const signUpInfo = {
  username: "",
  email: ""
}

Hub.listen('auth', data => {
  switch(data.payload.event) {
    case 'signIn':
      console.log("user signed in");
      const username = data.payload.data.attributes.sub;
      API.get("user", `/user/object/${username}`)
        .then(data => console.log(data))
        .catch(err => console.log(err))
      break;
    case 'signUp':
      const userData = data.payload.data;
      signUpInfo.username = userData.userSub;
      signUpInfo.email = userData.user.username;
      console.log('user signed up');
      break;
    case 'confirmSignUp':
      API.post("user", "/user", { body: { username: signUpInfo.username, email: signUpInfo.email, cart: [], purchases: [] } })
        .then(data => console.log("added user to table " + data))
        .catch(err => console.log(err))
      console.log('user confirmed sign up')
      break;
    case 'signOut':
      console.log('user signed out');
      break;
    case 'signIn_failure':
      console.log('user sign in failed');
      break;
    default:
  }
});

function App() {
  const [{ }, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...

    // auth.onAuthStateChanged((authUser) => {
    //   console.log("THE USER IS >>> ", authUser);

    //   if (authUser) {
    //     // the user just logged in / the user was logged in

    //     dispatch({
    //       type: "SET_USER",
    //       user: authUser,
    //     });
    //   } else {
    //     // the user is logged out
    //     dispatch({
    //       type: "SET_USER",
    //       user: null,
    //     });
    //   }
    // });
  }, []);


  return (
    <Authenticator>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/orders"
                element={
                  <>
                    <Header />
                    <Orders />
                  </>
                } />
              <Route path="/checkout"
                element={
                  <>
                    <Header />
                    <Checkout />
                  </>
                } />

              <Route path="/payment"
                element={
                  <>
                    <Header />
                    <Elements stripe={promise}>
                      <Payment />
                    </Elements>
                  </>
                } />

              <Route path="/"
                element={
                  <>
                    <Header />
                    <Home />
                  </>
                } />

            </Routes>
          </div>
        </Router>
    </Authenticator>
  );
}

export default withAuthenticator(App);
