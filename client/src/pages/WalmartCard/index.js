import React from "react";

function Card (props) {
    return (
        <div
            className="mt-8 mx-4 lg:w-1/4 md:1/2 w-full bg-white rounded max-w-xs shadow-lg select-none overflow-hidden">
            <div className="px-5 pt-5">
                <div className=" flex justify-end">
                    <i className="far fa-heart pointer"></i>
                </div>
                <img className="w-full" src={props.results.largeImage} alt="Sunset in the mountains"/>
                <div className="px-6 p-4 flex justify-center">
                    <img className="w-40" src="walmart.png" alt="amazon-logo"/>
                </div>
                <div className="px-6 pt-4">
                    <ul className="text-left">
                        <li className="font-bold text-xl mb-2">{props.results.name}</li>
                        <li className="text-xl mt-4">${props.results.salePrice}</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="bg-primary p-2 w-1/4 text-center rounded-tl-lg">
                    <a className="text-white" href="#">
                        Buy it!
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
