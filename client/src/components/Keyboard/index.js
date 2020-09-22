import React, {Component} from "react";
import API from "../../utils/API";
import Menu from "../Menu";
import WalmartCard from "../../pages/WalmartCard";
import AmazonCard from "../../pages/AmazonCard";

class Keyboard extends Component {
    state = {
        results: [],
        amazonResults: [],
        favs:[]
    };

    // When this component mounts, search for the item "keyboard"
    componentDidMount() {
        this.searchItems("keyboard");
        this.searchAmazon("computerkeyboard");
    }

    searchItems = query => {
        API.searchItems(query)
            .then(res => this.setState({results: res.data.items}))
            .catch(err => console.log(err));
    };

    searchAmazon = keyword => {
        API.searchAmazon(keyword)
            .then(res => this.setState({amazonResults: res.data}))
            .catch(err => console.log(err));
    };

    addFavoriteData = id => {

        console.log(`Clicked: ${id}`)

        let foundFav = this.state.results.filter(item => {
            // logic to match item ID
            return item.itemId == id;
        });

        console.log("***********");
        console.log(foundFav);

        // update State of FAVS array
        // this.setState({ favs: foundFav });

        // send OBJECT to backend route (server.js)
        API.saveFavorites(foundFav)
            .then(res => {
                console.log("Item Saved");
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }



    render() {
        return (
            <div className="text-center mb-32">
                <h3 className="text-primary text-5xl">We search it for you</h3>
                <Menu/>
                <main className="mt-5">
                    <div className="flex flex-wrap justify-center">
                        {this.state.results.map(item => {
                            return (
                                <WalmartCard          
                                results={item} 
                                key={item.itemId} 
                                addFavorites={this.props.addFavorites}
                                addFavoriteData={this.addFavoriteData}/>
                        )
                        })}
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {this.state.amazonResults.map(item => {
                            return( 
                                <AmazonCard amazonResults= {item} key={item.asin} addFavorites={this.props.addFavorites}/>
                            )
                        })}
                    </div>
                </main>
            </div>
        )
    }
}

export default Keyboard;
