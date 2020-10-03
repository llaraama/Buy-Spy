import React, { Component } from "react";

class AmazonCard extends Component {

    state = {
        active: false
    }

    changeToActive = () => {
        this.setState({ active: true })
    }

    render() {
        return (
            <div
                className="mt-8 mx-5 w-full bg-white rounded max-w-xs shadow-lg select-none overflow-hidden"
                key={this.props.amazonResults.ASIN}>
                <div className="relative">
                    <img className="w-4/5 mx-auto" src={this.props.amazonResults.imageUrl} alt="amazon-item"/>
                    <div className="absolute top-0 right-0 h-8 w-8">
                        <div className="absolute bottom-0 left-0">
                            <div className="flex justify-end"
                                 onClick={() => this.props.addFavorites(this.props.amazonResults.asin)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 icon-heart">
                                    <path id="heart" onClick={() => this.props.addFavoriteData2(this.props.amazonResults.ASIN)}
                                          d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="p-5 flex justify-center">
                        <img className="w-24" src="amazon.png" alt="amazon-logo.png"/>
                    </div>
                    <div className="px-6">
                        <ul className="text-left">
                            <li className="text-lg mb-2">{this.props.amazonResults.title.substr(0, 30)}}</li>
                            <li className="text-xl font-bold mt-4 text-orange-400">{this.props.amazonResults.price}</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="bg-primary p-2 w-1/4 text-center rounded-tl-lg">
                        <a className="text-white" href={this.props.amazonResults.detailPageURL}>
                            Buy it!
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AmazonCard;