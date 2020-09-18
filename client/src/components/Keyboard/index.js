import React, { Component } from "react";
import API from "../../utils/API";
import Cards from "../../pages/Cards";

class Keyboard extends Component {
    state = {
        results: {},
    };

    // When this component mounts, search for the item "keyboard"
    componentDidMount() {
        this.searchItems("keyboard");
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

export default Keyboard;
