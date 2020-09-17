import React from "react";

function Menu() {
    return (
        <div className="flex justify-center mx-8">
            <div className="flex mt-12">
                <div className="w-full hover:shadow-2xl bg-primary p-3 mx-12 mb-6 md:mb-0 text-white cursor-pointer rounded">
                    <i className="fas fa-sort-numeric-down text-white mr-3 text-2xl"></i>
                    Lowest price
                </div>
            </div>
            <div className="flex mt-12">
                <div className="w-full hover:shadow-2xl bg-primary p-3 mx-12 mb-6 md:mb-0 text-white cursor-pointer rounded">
                    <i className="fas fa-sort-numeric-down-alt text-white mr-3 text-2xl"></i>
                    Highest price
                </div>
            </div>
            <div className="flex mt-12">
                <div className="w-full hover:shadow-2xl bg-primary p-3 mx-12 mb-6 md:mb-0 text-white cursor-pointer rounded">
                    <i className="fas fa-users mr-3 text-2xl"></i>
                    Best Seller
                </div>
            </div>
        </div>
    );
}

export default Menu;
