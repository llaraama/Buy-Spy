import React from "react";

function Hero() {
    return (
        <div>
            <div className="lg:px-32 pl-10 lg:mt-20 lg:mb-0 my-20">
                <div className="flex">
                    <div className="w-1/2">
                        <div className="pt-4">
                            <h1 className="text-primary text-5xl">Find your next item</h1>
                            <h3 className="text-black">at the lowest price</h3>
                            <button
                                className="bg-teal-400 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded mt-4">
                                Best Sellers
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 hidden lg:flex">
                        <img src="devices.png" alt="devices"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
