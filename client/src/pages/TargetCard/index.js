import React, {Component} from "react";
import API from "../../utils/API";

class TargetCard extends Component {
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
                key={this.props.results.tcin}>
                <div className="px-5 pt-5">
                    <div className=" flex justify-end"
                         onClick={() => this.props.addFavorites(this.props.results.tcin)}>
                        <i id="heart" onClick={this.changeToActive} className={this.state.active ? "far fa-heart cursor-pointer activeIcon" : "far fa-heart cursor-pointer"}></i>
                    </div>
                    <img className="w-full" src={this.props.results.targetImages} alt="item"/>
                    <div className="px-6 p-4 flex justify-center">
                        <img className="w-40" src="target.png" alt="target-logo"/>
                    </div>
                    <div className="px-6 pt-4">
                        <ul className="text-left">
                            <li className="font-bold text-xl mb-2">{this.props.results.title.substr(0, 30)}</li>
                            <li className="text-xl mt-4">{this.props.results.price.formatted_current_price}</li>
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
export default TargetCard;
