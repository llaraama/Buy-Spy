import React from "react";
import Card from "../Card";

function Cards() {
    return (
        <div className="text-center">
            <h3 className="text-primary text-5xl">We search it for you</h3>
            <div class="flex justify-end mt-8 mr-12">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 ml-24">
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state">
                            <option>Laptops</option>
                            <option>Desk</option>
                            <option>Chairs</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <main className="mt-5">
                <div className="flex flex-wrap justify-center">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </main>
        </div>

    );
}

export default Cards;
