import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import API from "../../utils/API";

function Menu(props) {
    const location = useLocation();
    const [search, getSearch] = useState();
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        props.getItemSearch(search)
        history.push("/search")
    };

    return (
        <div>
            <main className="menu flex flex-wrap justify-center static">
                <form onSubmit={handleSubmit} className="mr-8">
                    <div className="mt-12 flex lg:block">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Search your own item
                        </label>
                        <div className="flex">
                            <input onChange={e => getSearch(e.target.value)}
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                   id="username" type="text" placeholder="Item"/>
                            <button
                                className="bg-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded ml-4" type="submit">
                                search
                            </button>
                        </div>
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
            </main>
            <div
                className={props.auth ? "hidden" : "p-2 items-center bg-indigo-800 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex mt-12"}
                role="alert">
                <span
                    className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Join us!</span>
                <span className="font-semibold mr-2 text-left flex-auto">If you would like to add a favorites list please login or signup</span>
            </div>
        </div>

    );
}

export default Menu;
