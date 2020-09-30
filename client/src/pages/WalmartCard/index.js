import React, {Component} from "react";


class WalmartCard extends Component {

    state = {
        active: false
    }

    changeToActive = () => {
        this.setState({ active: true })
    }

    render() {
        return (
            <div
                className="mt-8 mx-4 w-full bg-white rounded max-w-xs shadow-lg select-none overflow-hidden"
                key={this.props.results.itemId}>
                <div className="relative">
                    <img className="w-4/5 mx-auto" src={this.props.results.largeImage} alt="Sunset in the mountains"/>
                    <div className="absolute top-0 right-0 h-8 w-8">
                        <div className="absolute bottom-0 left-0">
                            <div className=" flex justify-end"
                                 onClick={() => this.props.addFavorites(this.props.results.itemId)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 icon-heart">
                                    <path id="heart"
                                          onClick={() => this.props.addFavoriteData(this.props.results.itemId)}
                                          d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z">
                                    </path>
                                </svg>
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