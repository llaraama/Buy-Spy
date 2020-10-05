import React, {Component} from "react";
// import WalmartCard from "../WalmartCard"
import API from "../../utils/API"
// import AmazonCard from "../AmazonCard"
import FavoritesCard from "../../components/FavoritesCard"


class Favorites extends Component{
    state={
        dbResults:[],
    };

    componentDidMount() {
        API.getFavorites()
            .then(data => {
                this.setState({dbResults: data.data})
            })
            .catch(err => console.log(err))

    }

    removeFavoritesData = id => {
        let foundItem = this.state.dbResults.filter(itemRemoval => {
            return itemRemoval.itemId !== id;
        });

        this.setState({
            dbResults: foundItem
        })

        API.removeFavorites(id)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                {this.state.dbResults.length === 0
                    ? <div className="text-center py-4 lg:px-4 my-48">
                        <div
                            className="p-2 items-center bg-indigo-800 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                            role="alert">
                        <span
                            className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Favs</span>
                            <span className="font-semibold mr-2 text-left flex-auto">You don't have any favorite item yet! :( </span>
                        </div>
                    </div>
                    : <div className="text-center mb-32">
                        <main className="mt-5">
                            <div className="flex flex-wrap justify-center">
                                {this.state.dbResults.map(item => {
                                    return (
                                        <FavoritesCard
                                            results={item}
                                            key={item.itemId}
                                            removeFavs={this.props.removeFavorites}
                                            removeFavoritesData={this.removeFavoritesData}
                                        />
                                    )
                                })}
                            </div>

                        </main>
                    </div>}
            </div>

        )
    }
}

export default Favorites;