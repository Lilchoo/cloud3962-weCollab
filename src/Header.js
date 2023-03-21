import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports)

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="header">
          <Link to="/" className="header-no-underline">
            <h2 className="header-logo">weCollab</h2>
          </Link>

          <div className="header-nav">
            <div onClick={signOut} className="header-option">
              <span className="header-optionLineOne">{user.attributes.email}</span>
              <span className="header-optionLineTwo">{'Sign Out'}</span>
            </div>

            <Link to="/checkout" className="header-no-underline">
              <div className="header-optionBasket">
                <ShoppingBasketIcon />
                <span className="header-optionLineTwo header-basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>)}
    </Authenticator>
  );
}

export default Header;
