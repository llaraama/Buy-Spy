import React, {Component} from "react";


class WalmartCard extends Component {
    state = {
        active: false
    }

    changeToActive = () => {
        if  (this.state.active === false) {
            this.setState({active: true})
        } else {
            this.setState({active: false})
        }
    }

    onclick = () => {
        this.props.addFavoriteData2(this.props.amazonResults.ASIN)
        this.changeToActive()
    }

    render() {
        return (
            <div
                className="mt-8 mx-4 w-full bg-white rounded max-w-xs shadow-lg select-none overflow-hidden"
                key={this.props.results.itemId}>
                <div className="relative">
                    <img className="w-4/5 mx-auto" src={this.props.results.image} alt="Sunset in the mountains"/>
                    <div className={this.props.auth ? "absolute top-0 right-0 h-8 w-8" : "hidden"}>
                        <div className="absolute bottom-0 left-0">
                            <div className={this.state.active ? "flex justify-end text-primary" : "flex justify-end text-teal-400"}
                                 onClick={() => this.props.addFavorites(this.props.results.itemId)}>
                                <i id="heart" onClick={this.onclick}
                                   className="fas fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="p-4 flex justify-center">
                        <img className="w-32" src="walmart.png" alt="amazon-logo"/>
                    </div>
                    <div className="px-6">
                        <ul className="text-left">
                            <li className="text-lg mb-2">{this.props.results.name.substr(0, 30)}</li>
                            <li className="text-xl mt-4 font-bold text-blue-500">${this.props.results.salePrice}</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="bg-primary p-2 w-1/4 text-center rounded-tl-lg">
                        <a className="text-white" href={this.props.results.productUrl}>
                            Buy it!
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default WalmartCard;