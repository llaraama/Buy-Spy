import React, {Component} from "react";
import API from "../../utils/API";
import Menu from "../Menu";
import WalmartCard from "../../pages/WalmartCard";
import AmazonCard from "../../pages/AmazonCard";
import TargetCard from "../../pages/TargetCard";
import AmazonLogo from "../../amazon.png"
import WalmartLogo from "../../walmart.png"
import TargetLogo from "../../target.png"

class Laptop extends Component {
    state = {
        results: [],
        amazonResults: [],
        favs: [],
        targetResults: []
    };

    // When this component mounts, search for the item "laptop"
    componentDidMount() {
        this.searchItems("laptop");
        this.searchAmazon("laptop");
        this.targetSearchItems("laptop");
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
        let foundFav = this.state.results.filter(item => {
            // logic to match item ID
            return item.itemId == id;
        });

        let saleprice;

        if(foundFav){
            saleprice = "$" +  foundFav[0].salePrice
        }

        let currentUser=sessionStorage.getItem('id')
        let tempWalmartObj = {
        itemId: foundFav[0].itemId,
        image: foundFav[0].largeImage,
        name: foundFav[0].name,
        salePrice: saleprice,
        productUrl: foundFav[0].productUrl,
        logo:WalmartLogo,
        userid:currentUser
        }
          
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
        let foundFavAmazon = this.state.amazonResults.filter(itemAmazon => {
            // logic to match item ID
            return itemAmazon.ASIN == id;
        });

        let currentUser=sessionStorage.getItem('id')
        let tempObj2 = {
            itemId: foundFavAmazon[0].ASIN,
            image: foundFavAmazon[0].imageUrl,
            name: foundFavAmazon[0].title,
            salePrice: foundFavAmazon[0].price,
            productUrl:foundFavAmazon[0].detailPageURL,
            logo:AmazonLogo,
            userid:currentUser

          }

        // send OBJECT to backend route (server.js)
        API.saveFavorites(tempObj2)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    addFavoriteData3 = id => {
        let foundFavTarget = this.state.targetResults.filter(item => {
            // logic to match item ID
            return item.tcin == id;
        });

        let currentUser=sessionStorage.getItem('id')
        let tempObj3 = {
            itemId: foundFavTarget[0].tcin,
            image: foundFavTarget[0].targetImages,
            name: foundFavTarget[0].title,
            salePrice: foundFavTarget[0].price.formatted_current_price,
            productUrl:foundFavTarget[0].url,
            logo:TargetLogo,
            userid:currentUser

          }

        // send OBJECT to backend route (server.js)
        API.saveFavorites(tempObj3)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    targetSearchItems = query => {
        API.targetSearchItems(query)
            .then(res => this.setState({targetResults: res.data.products}))
            .then(this.getImage)
            .catch(err => console.log(err));
    };

    getImage = () => {
        const newData = this.state.targetResults.map(item => {
            let images = item.images
            images.map (image => {
                let base = image.base_url
                let guest = image.primary
                let url = base + guest
                item.targetImages = url
            })
            return item
        })
        this.setState({targetResults: newData})
    }

    render() {
        return (
            <div className="text-center mb-32">
                <Menu/>
                <main className="mt-5 flex flex-wrap">
                    <div className="flex flex-wrap justify-center w-1/3">
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
                    <div className="flex flex-wrap justify-center w-1/3">
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
                    <div className="flex flex-wrap justify-center w-1/3">
                        {this.state.targetResults.map(item => {
                            return (
                                <TargetCard
                                    results={item}
                                    key={item.tcin}
                                    addFavorites={this.props.addFavorites}
                                    addFavoriteData3={this.addFavoriteData3}/>
                            )
                        })}
                    </div>
                </main>
            </div>
        )
    }
}

export default Laptop;

