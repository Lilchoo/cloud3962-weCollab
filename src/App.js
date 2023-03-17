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
import { Amplify } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports)

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

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
