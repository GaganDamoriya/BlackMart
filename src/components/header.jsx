import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <>
      <header>
        <div className="leftColmn">
          <h1 onClick={() => navigate("/")}>
            BlackMart<span>.</span>
          </h1>
        </div>
        <div className="SerachSec">
          <form action="">
            <input type="search" name="search" id="search" />
            <button type="submit"></button>
          </form>
        </div>

        <div className="profileSec">
          <div className="cart" onClick={() => navigate("/cart")}>
            Cart
          </div>
          <div className="login">login/Sign up</div>
        </div>
      </header>
    </>
  );
};

export default Header;
