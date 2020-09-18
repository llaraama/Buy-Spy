import React, { Component } from "react";
import API from "../../utils/API";
import Cards from "../../pages/Cards";

class Desk extends Component {
    state = {
        results: {},
    };

    // When this component mounts, search for the item "desk"
    componentDidMount() {
        this.searchItems("desk");
    }

    searchItems = query => {
        API.searchItems(query)
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Cards/>
        );
    }
}

export default Desk;