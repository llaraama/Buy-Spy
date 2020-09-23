import React, { Component } from "react";
import API from "../../utils/API";
import Menu from "../Menu";
import WalmartCard from "../../pages/WalmartCard";
import AmazonCard from "../../pages/AmazonCard";

class Desk extends Component {
    state = {
        results: [],
        amazonResults: [],
        favs: []
    };

    // When this component mounts, search for the item "desk"
    componentDidMount() {
        this.searchItems("desk");
        this.searchAmazon("desk");
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

          let tempWalmartObj = {
          itemId: foundFav[0].itemId,
          image: foundFav[0].largeImage,
          name: foundFav[0].name,
          salePrice: foundFav[0].salePrice,
          productUrl: foundFav[0].productUrl
        }
        console.log("***********");
        console.log(foundFav);

        // update State of FAVS array
        // this.setState({ favs: foundFav });

        // send OBJECT to backend route (server.js)
        API.saveFavorites(tempWalmartObj)
            .then(res => {
                console.log("Item Saved");
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    addFavoriteData2 = id => {

        console.log(`Clicked: ${id}`)
        console.log("clicked amazon")

        let foundFavAmazon = this.state.amazonResults.filter(itemAmazon => {
            // logic to match item ID
            return itemAmazon.ASIN == id;
        });

        let tempObj2 = {
            itemId:foundFavAmazon[0].ASIN,
            image:foundFavAmazon[0].imageUrl,
            name: foundFavAmazon[0].title,
            salePrice: foundFavAmazon[0].price,
            productUrl:foundFavAmazon[0].detailPageURL
          }
          console.log(tempObj2)

        // update State of FAVS array
        // this.setState({ favs: foundFav });

        // send OBJECT to backend route (server.js)
        API.saveFavorites(tempObj2)
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
                        {this.state.amazonResults.map(itemAmazon => {
                            return( 
                                <AmazonCard
                                amazonResults= {itemAmazon} 
                                key={itemAmazon.asin} 
                                addFavorites={this.props.addFavorites}
                                addFavoriteData2={this.addFavoriteData2}/>
                            )
                        })}
                    </div>
                </main>
            </div>
        )
    }
}

export default Desk;