import React, {Component} from "react";

class TargetCard extends Component {
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
                key={this.props.results.tcin}>
                <div className="relative">
                    <img className="w-4/5 mx-auto" src={this.props.results.targetImages} alt="item"/>
                    <div className="absolute top-0 right-0 h-8 w-8">
                        <div className="absolute bottom-0 left-0">
                            <div className={this.state.active ? "flex justify-end text-primary" : "flex justify-end text-teal-400"}
                                 onClick={() => this.props.addFavorites(this.props.results.tcin)}>
                                <i id="heart" onClick={this.onclick}
                                   className="fas fa-heart"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="p-5 flex justify-center">
                        <img className="w-32" src="target.png" alt="target-logo"/>
                    </div>
                    <div className="px-6">
                        <ul className="text-left">
                            <li className="text-lg mb-2">{this.props.results.title.substr(0, 30)}</li>
                            <li className="text-xl font-bold mt-4 text-red-600">{this.props.results.price.formatted_current_price}</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="bg-primary p-2 w-1/4 text-center rounded-tl-lg">
                        <a className="text-white" href={"https://www.target.com" + this.props.results.url}>
                            Buy it!
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default TargetCard;
