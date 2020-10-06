import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
    const location = useLocation();

    return (
        <nav className="lg:flex block items-center justify-between flex-wrap bg-white p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-5">
                <Link className="flex" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-2 icon-tag">
                        <path fill="#4B5286"
                              d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM7 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                        <path fill="#c9cbda" d="M12 18l6-6-4-4-6 6.01L12 18z"></path>
                    </svg>
                    <span className="font-semibold lg:text-xl text-sm tracking-tight text-black">Buy-Spy</span>
                </Link>
                <ul className={location.pathname === "/desk" | location.pathname === "/laptop" | location.pathname === "/mouse" | location.pathname ==="/keyboard" | location.pathname ==="/chair" ? "hidden" : "flex mx-4" }>
                    <li className="mr-6">
                        <Link
                            className={location.pathname === "/desk" ? "nav-link active" : "text-teal-400 hover:underline"}
                            to="/desk">Desk</Link>
                    </li>
                    <li className="mr-6">
                        <Link
                            className={location.pathname === "/laptop" ? "nav-link active" : "text-teal-400 hover:underline"}
                            to="/laptop">Laptop</Link>
                    </li>
                    <li className="mr-6">
                        <Link
                            className={location.pathname === "/mouse" ? "nav-link active" : "text-teal-400 hover:underline"}
                            to="/mouse">Mouse</Link>
                    </li>
                    <li className="mr-6">
                        <Link
                            className={location.pathname === "/keyboard" ? "nav-link active" : "text-teal-400 hover:underline"}
                            to="/keyboard">Keyboard</Link>
                    </li>
                    <li className="mr-6">
                        <Link
                            className={location.pathname === "/chair" ? "nav-link active" : "text-teal-400 hover:underline"}
                            to="/chair">Chair</Link>
                    </li>
                </ul>
            </div>
            <div className="flex justify-end">
                <div className={props.auth ? "flex" : "hidden"}>
                    <Link to="/my-favorites"
                          className={location.pathname === "/my-favorites" ? "text-primary mr-3" : "text-teal-400 mr-3"}>
                        Favorites
                    </Link>
                    <i className={location.pathname === "/my-favorites" ? "fas fa-heart text-primary" : "fas fa-heart text-teal-400 text-teal-400"}></i>
                    <span className={location.pathname === "/my-favorites" ? "text-primary" : "text-teal-400"}>{props.favorites}</span>
                    <a href="/">
                        <i className="fas fa-sign-out-alt text-primary cursor-pointer ml-4" onClick={props.logout}></i>
                    </a>
                </div>
                <div className={props.auth ? "hidden" : "flex"}>
                    <Link
                        className={location.pathname === "/login" ? "nav-link login-active font-bold mx-4 mt-2" : "text-primary hover:underline mx-4 mt-2"}
                        to="/login">Login</Link>
                    <button
                        className="bg-teal-400 hover:bg-teal-400 text-white font-bold p-2 rounded">
                        <Link
                            to="/signup">Signup</Link>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
