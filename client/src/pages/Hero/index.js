import React from "react";

function Hero() {
    return (
        <div>
            <div className="px-32 mt-20">
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
                    <div className="w-1/2">
                        <img src="devices.png" alt="devices"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
