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
                className="mt-8 mx-4 lg:w-1/4 md:1/2 w-full bg-white rounded max-w-xs shadow-lg select-none overflow-hidden"
                key={this.props.amazonResults.ASIN}>
                <div className="px-5 pt-5">
                    <div className=" flex justify-end"
                         onClick={() => this.props.addFavorites(this.props.amazonResults.ASIN)}>
                        <i id="heart" 
                        // onClick={this.changeToActive} 
                        onClick={() => this.props.addFavoriteData2(this.props.amazonResults.ASIN)} 
                        className={this.state.active ? "far fa-heart cursor-pointer activeIcon" : "far fa-heart cursor-pointer"}></i>
                    </div>
                    <img className="w-full" src={this.props.amazonResults.imageUrl} alt="Sunset in the mountains"/>
                    <div className="px-6 p-4 flex justify-center">
                        <img className="w-40" src="amazon-logo" alt="amazon.png"/>
                    </div>
                    <div className="px-6 pt-4">
                        <ul className="text-left">
                            <li className="font-bold text-xl mb-2">{this.props.amazonResults.title}</li>
                            <li className="text-xl mt-4">{this.props.amazonResults.price}</li>
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