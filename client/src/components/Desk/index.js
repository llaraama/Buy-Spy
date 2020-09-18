import React, { Component } from "react";
import API from "../../utils/API";
import Menu from "../Menu";
import WalmartCard from "../../pages/WalmartCard";
import AmazonCard from "../../pages/AmazonCard";

class Desk extends Component {
    state = {
        results: [],
    };

    // When this component mounts, search for the item "desk"
    componentDidMount() {
        this.searchItems("desk");
    }

    searchItems = query => {
        API.searchItems(query)
            .then(res => this.setState({results: res.data.items}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="text-center mb-32">
                <h3 className="text-primary text-5xl">We search it for you</h3>
                <Menu/>
                <main className="mt-5">
                    <div className="flex flex-wrap justify-center">
                        {console.log(this.state.results)}
                        {this.state.results.map(item => {
                            return (
                                <WalmartCard results={item}/>
                            )
                        })}
                    </div>
                    <AmazonCard/>
                </main>
            </div>
        )
    }
}

export default Desk;