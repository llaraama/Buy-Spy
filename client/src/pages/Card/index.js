import React from "react";

function Card() {
    return (
        <div
            className="mt-8 mx-4 lg:w-1/4 md:1/2 w-full bg-white rounded max-w-xs shadow-lg select-none overflow-hidden">
            <div className="px-5 pt-5">
                <div className=" flex justify-end">
                    <i className="far fa-heart pointer"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 icon-heart pointer">
                        <path fill="#F73D51"
                              d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"></path>
                    </svg>
                </div>
                <img className="w-full" src="/lap.png" alt="Sunset in the mountains"/>
                <div className="px-6 p-4 flex justify-center">
                    <img className="w-24" src="walmart.png" alt="amazon-logo"/>
                </div>
                <div className="px-6 pt-4">
                    <ul className="text-left">
                        <li className="font-bold text-xl mb-2">MacBook Pro</li>
                        <li className="text-sm font-thin">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatibus quia, nulla!
                        </li>
                        <li className="text-xl mt-4">$3,443.00</li>
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
