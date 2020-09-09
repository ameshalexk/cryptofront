import React from "react";
import "./NavBar.css";

function NavBar(props) {
    let navBarItems = [
        <li className="navbar-item" key={1}>
            <a href="/">Home</a>
        </li>,
    ];
    if (props.isLoggedIn) {
        navBarItems.push(
            <li className="navbar-item" key={2}>
                <a href="/" onClick={props.logOut}>
                    Log Out
                </a>
            </li>
        );
    } else {
        navBarItems.push(
            <li className="navbar-item" key={3}>
                <a href="/signup">Sign Up</a>
            </li>
        );
        navBarItems.push(
            <li className="navbar-item" key={4}>
                <a href="/login">Log In</a>
            </li>
        );
    }

    return (
        <nav className="navbar">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <h1>Crypto</h1>
                </a>
                <a
                    role="button"
                    class="navbar-burger burger"
                    ariaLabel="menu"
                    ariaExpanded="false"
                    dataTarget="navbarBasicExample"
                    href="/"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
             <ul className="navbar-end">{navBarItems}</ul>
        </nav>
    );
}

export default NavBar;
