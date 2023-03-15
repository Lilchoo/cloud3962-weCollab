import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      // auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/" className="header-no-underline">
        <h2 className="header-logo">weCollab</h2>
      </Link>

      <div className="header-nav">
        <Link to={!user && '/login'} className="header-no-underline">
          <div onClick={handleAuthenticaton} className="header-option">
            <span className="header-optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header-optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/checkout" className="header-no-underline">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
