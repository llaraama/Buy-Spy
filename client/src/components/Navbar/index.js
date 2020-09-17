import React from "react";
import { Link, useLocation } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

    const location = useLocation();

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link className="flex" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-tag">
                        <path fill="#F73D51"
                              d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM7 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                        <path fill="#FEEBED" d="M12 18l6-6-4-4-6 6.01L12 18z"></path>
                    </svg>
                    <span className="font-semibold text-xl tracking-tight text-black">Buy-Spy</span>
                </Link>
            </div>
            <ul className="flex">
                <li className="mr-6">
                    <Link className={location.pathname === "/desktop" ? "nav-link active" : "nav-link"}
                          to="/desktop">Desktop</Link>
                </li>
                <li className="mr-6">
                    <Link className={location.pathname === "/laptop" ? "nav-link active" : "nav-link"}
                          to="/laptop">Laptop</Link>
                </li>
                <li className="mr-6">
                    <Link className={location.pathname === "/mouse" ? "nav-link active" : "nav-link"}
                          to="/mouse">Mouse</Link>
                </li>
                <li className="mr-6">
                    <Link className={location.pathname === "/keyboard" ? "nav-link active" : "nav-link"}
                          to="/keyboard">Keyboard</Link>
                </li>
                <li className="mr-6">
                    <Link className={location.pathname === "/accesories" ? "nav-link active" : "nav-link"}
                          to="/accesories">Accesories</Link>
                </li>
            </ul>
            <div className="w-full block flex-grow lg:flex lg:justify-end lg:w-auto">
                <div className="text-sm">
                    <Link to="#responsive-header"
                          className="mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-1">
                        My Favorites
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-heart inline">
                        <path fill="#F73D51"
                              d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"></path>
                    </svg>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;