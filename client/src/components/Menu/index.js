import React from "react";

function Menu() {
    return (
        <div className="flex justify-center mx-8">
            <div className="flex mt-12">
                <div className="w-full hover:shadow-2xl bg-primary p-3 mx-12 mb-6 md:mb-0 text-white cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         className="w-8 mr-4 icon-arrow-thin-down-circle">
                        <path fill="#fff"
                              d="M11 14.59V7a1 1 0 0 1 2 0v7.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3z"></path>
                    </svg>
                    Lowest price
                </div>
            </div>
            <div className="flex mt-12">
                <div className="w-full hover:shadow-2xl bg-primary p-3 mx-12 mb-6 md:mb-0 text-white cursor-pointer rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         className="w-8 mr-4 icon-arrow-thin-up-circle">
                        <path fill="#fff"
                              d="M13 9.41V17a1 1 0 0 1-2 0V9.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.42L13 9.4z"></path>
                    </svg>
                    Highest price
                </div>
            </div>
        </div>
    );
}

export default Menu;
