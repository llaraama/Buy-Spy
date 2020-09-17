import React from "react";
import Menu from "../../components/Menu";
import Card from "../Card";

function Cards() {
    return (
        <div className="text-center mb-32">
            <h3 className="text-primary text-5xl">We search it for you</h3>
            <Menu/>
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
