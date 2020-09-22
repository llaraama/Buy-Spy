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
                className="mt-8 mx-4 lg:w-1/4 md:1/2 w-full bg-white rounded max-w-xs shadow-lg select-none overflow-hidden"
                key={this.props.results.itemId}>
                <div className="px-5 pt-5">
                    <div className=" flex justify-end"
                         onClick={() => this.props.addFavorites(this.props.results.itemId)}>
                        <i id="heart" 
                            /* onClick={this.changeToActive}  */
                            onClick={() => this.props.addFavoriteData(this.props.results.itemId)} 
                            className={this.state.active ? "far fa-heart cursor-pointer activeIcon" : "far fa-heart cursor-pointer"}></i>
                    </div>
                    <img className="w-full" src={this.props.results.largeImage} alt="Sunset in the mountains"/>
                    <div className="px-6 p-4 flex justify-center">
                        <img className="w-40" src="walmart.png" alt="amazon-logo"/>
                    </div>
                    <div className="px-6 pt-4">
                        <ul className="text-left">
                            <li className="font-bold text-xl mb-2">{this.props.results.name.substr(0, 30)}</li>
                            <li className="text-xl mt-4">${this.props.results.salePrice}</li>
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