import React from "react";
import Menu from "../../components/Menu";
import AmazonCard from "../AmazonCard";
import WalmartCard from "../WalmartCard";

function Cards() {
    return (
        <div className="text-center mb-32">
            <Menu/>
            <main className="mt-5">
                <div className="flex flex-wrap justify-center">
                    <AmazonCard/>
                    <WalmartCard/>
                    <AmazonCard/>
                    <WalmartCard/>
                </div>
            </main>
        </div>

    );
}

export default Cards;
