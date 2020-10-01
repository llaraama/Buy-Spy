import React from "react";

function Menu() {
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
                <div
                    className="mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl">
                    <i className="text-2xl fas fa-paperclip"></i>
                    <p>Desk</p>
                </div>
                <div
                    className="mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl">
                    <i className="text-2xl fas fa-laptop"></i>
                    <p>Laptop</p>
                </div>
                <div
                    className="mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl">
                    <i className="text-2xl fas fa-mouse"></i>
                    <p>Mouse</p>
                </div>
                <div
                    className="mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl">
                    <i className="text-2xl fas fa-keyboard"></i>
                    <p>Keyboard</p>
                </div>
                <div
                    className="mt-8 mx-4 p-5 text-gray-700 rounded max-w-xs shadow-lg select-none overflow-hidden hover:shadow-2xl">
                    <i className="text-2xl fas fa-chair"></i>
                    <p>Chair</p>
                </div>
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
                    <div className="flex mt-12">
                        <div
                            className="w-full p-3 md:mb-0 text-white cursor-pointer rounded flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 className="w-8 icon-arrow-thin-up-circle">
                                <path fill="#4B5286"
                                      d="M13 9.41V17a1 1 0 0 1-2 0V9.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.42L13 9.4z"></path>
                            </svg>
                            <p className="py-3 text-primary hover:underline">Highest price</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
}

export default Menu;
