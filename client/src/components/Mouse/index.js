import React, { Component } from "react";
import API from "../../utils/API";
import Cards from "../../pages/Cards";

class Mouse extends Component {
    state = {
        results: {},
    };

    // When this component mounts, search for the item "mouse"
    componentDidMount() {
        this.searchItems("mouse");
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

export default Mouse;