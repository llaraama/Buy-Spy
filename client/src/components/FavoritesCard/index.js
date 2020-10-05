import React, {Component} from "react";


class FavoritesCard extends Component {
    state = {
        active: false
    }

    changeToActive = () => {
        this.setState({ active: true })
    }

    render() {
        return (
            <div className="max-w-lg h-64 w-1/3 lg:flex mx-5" key={this.props.results.itemId}>
                <img
                    className="w-1/2 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    title="Woman holding a mug" src={this.props.results.image}/>
                <div
                    className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <i className="fas fa-heart text-primary text-right cursor-pointer" id="heart" onClick={() => this.props.removeFavoritesData(this.props.results.itemId)}></i>
                    <div className="my-5 text-left">
                        <div className="text-gray-900 mb-2">{this.props.results.name.substr(0, 40)}</div>
                        <p className="text-gray-700 text-xl font-bold">{this.props.results.salePrice}</p>
                        <div className="mt-5">
                            <a className="text-primary font-bold hover:underline mt-" href={this.props.results.productUrl}>
                                Buy it!
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <img className="w-20" src={this.props.results.logo} alt={this.props.results.logo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FavoritesCard;