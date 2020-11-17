import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1 pr-2">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1 pr-2">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="mx-1 pr-2">
            <a href="https://www.genucel.com/before-and-after.html">
              Before & After
            </a>
          </li>
          <li className="mx-1 pr-2">
            <a href="https://www.genucel.com/technology.html">
              Technology
            </a>
          </li>
          <li className="mx-1 pr-2">
            <a href="https://www.genucel.com/reviews.html">
              Reviews
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1 pr-2">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 pr-2">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="mx-1 pr-2">
            <a href="https://www.genucel.com/before-and-after.html">
              Before & After
            </a>
          </li>
          <li className="mx-1 pr-2">
            <a href="https://www.genucel.com/technology.html">
              Technology
            </a>
          </li>
          <li className="mx-1 pr-2">
            <a href="https://www.genucel.com/reviews.html">
              Reviews
            </a>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <Link to="/">
        <img src={`/images/logo.png`}
          style={{ "max-width": "160px" }}
          className="m-2"
          alt="genucel logo" />
      </Link>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
