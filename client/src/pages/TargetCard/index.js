import React, {Component} from "react";

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
                className="mt-8 mx-5 w-full bg-white rounded max-w-xs shadow-lg select-none overflow-hidden"
                key={this.props.results.tcin}>
                <div className="relative">
                    <img className="w-4/5 mx-auto" src={this.props.results.targetImages} alt="item"/>
                    <div className="absolute top-0 right-0 h-8 w-8">
                        <div className="absolute bottom-0 left-0">
                            <div className=" flex justify-end"
                                 onClick={() => this.props.addFavorites(this.props.results.tcin)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 icon-heart">
                                    <path id="heart"
                                          onClick={() => this.props.addFavoriteData3(this.props.results.tcin)}
                                          d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z">
                                    </path>
                                </svg>
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
                            <li className="text-xl mb-2">{this.props.results.title.substr(0, 30)}</li>
                            <li className="text-xl font-bold mt-4 text-red-600">{this.props.results.price.formatted_current_price}</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="bg-primary p-2 w-1/4 text-center rounded-tl-lg">
                        <a className="text-white" href={this.props.results.url}>
                            Buy it!
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default TargetCard;
