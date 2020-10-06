import React, {Component} from "react";

class AmazonCard extends Component {
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
                className="mt-8 mx-5 w-full bg-white rounded max-w-xs shadow-lg select-none overflow-hidden"
                key={this.props.amazonResults.ASIN}>
                <div className="relative">
                    <img className="w-4/5 mx-auto" src={this.props.amazonResults.imageUrl} alt="amazon-item"/>
                    <div className={this.props.auth ? "absolute top-0 right-0 h-8 w-8" : "hidden"}>
                        <div className="absolute bottom-0 left-0">
                            <div className={this.state.active ? "flex justify-end text-primary" : "flex justify-end text-teal-400"}
                                 onClick={() => this.props.addFavorites(this.props.amazonResults.asin)}>
                                <i id="heart" onClick={this.onclick}
                                   className="fas fa-heart"></i>
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