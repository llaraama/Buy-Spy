import React from "react";
import {Link, useLocation} from "react-router-dom";

function Menu() {
    const location = useLocation();

    return (
        <div>
            <main className="menu flex flex-wrap justify-center static">
                <form className="mr-8">
                    <div className="mt-12">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Search your own item
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Item"/>
                    </div>
                </form>
                <Link
                    className={location.pathname === "/desk" ? "group bg-primary hover:bg-white mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl" : "group hover-bg-primary bg-white mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl"}
                        to="/desk">
                    <i className={location.pathname === "/desk" ? "text-2xl fas fa-paperclip text-white group-hover:text-gray-700" : "text-2xl fas fa-paperclip text-gray-700 group-hover:text-white"}></i>
                    <p className={location.pathname === "/desk" ? "text-white group-hover:text-gray-700" : "group-hover:text-white"}>Desk</p>
                </Link>
                <Link
                    className={location.pathname === "/laptop" ? "group bg-primary hover:bg-white mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl" : "group hover-bg-primary bg-white mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl"}
                    to="/laptop">
                    <i className={location.pathname === "/laptop" ? "text-2xl fas fa-laptop text-white group-hover:text-gray-700" : "text-2xl fas fa-laptop text-gray-700 group-hover:text-white"}></i>
                    <p className={location.pathname === "/laptop" ? "text-white group-hover:text-gray-700" : "group-hover:text-white"}>Laptop</p>
                </Link>
                <Link
                    className={location.pathname === "/mouse" ? "group bg-primary hover:bg-white mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl" : "group hover-bg-primary bg-white mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl"}
                    to="/mouse">
                    <i className={location.pathname === "/mouse" ? "text-2xl fas fa-mouse text-white group-hover:text-gray-700" : "text-2xl fas fa-mouse text-gray-700 group-hover:text-white"}></i>
                    <p className={location.pathname === "/mouse" ? "text-white group-hover:text-gray-700" : "group-hover:text-white"}>Mouse</p>
                </Link>
                <Link
                    className={location.pathname === "/keyboard" ? "group bg-primary hover:bg-white mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl" : "group hover-bg-primary bg-white mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl"}
                    to="/keyboard">
                    <i className={location.pathname === "/keyboard" ? "text-2xl fas fa-keyboard text-white group-hover:text-gray-700" : "text-2xl fas fa-keyboard text-gray-700 group-hover:text-white"}></i>
                    <p className={location.pathname === "/keyboard" ? "text-white group-hover:text-gray-700" : "group-hover:text-white"}>Keyboard</p>
                </Link>
                <Link
                    className={location.pathname === "/chair" ? "group bg-primary hover:bg-white mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl" : "group hover-bg-primary bg-white mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl"}
                    to="/chair">
                    <i className={location.pathname === "/chair" ? "text-2xl fas fa-chair text-white group-hover:text-gray-700" : "text-2xl fas fa-chair text-gray-700 group-hover:text-white"}></i>
                    <p className={location.pathname === "/chair" ? "text-white group-hover:text-gray-700" : "group-hover:text-white"}>Chair</p>
                </Link>
                <div className="flex justify-center">
                    <div className="flex mt-12">
                        <div
                            className="w-full p-3 md:mb-0 text-white cursor-pointer rounded flex content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 className="w-8 icon-arrow-thin-down-circle">
                                <path fill="#4B5286"
                                      d="M11 14.59V7a1 1 0 0 1 2 0v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3z"></path>
                            </svg>
                            <p className="py-3 text-primary hover:underline">Lowest price</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
}

export default Menu;
