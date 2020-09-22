import React, {Component} from "react";
import WalmartCard from "../WalmartCard"
import API from "../../utils/API"


class Favorites extends Component{
  
state={
    dbResults:[]

};
componentDidMount(){
    API.getFavorites()
        .then(data =>{
            console.log("this is it ")
            console.log(data.data);
            this.setState({ dbResults: data.data})
        })
        .catch (err=> console.log(err))
}
render(){
    return (
        <div className="text-center mb-32">
            <main className="mt-5">
                <div className="flex flex-wrap justify-center">
                    {this.state.dbResults.map(item => {
                        return (
                            <WalmartCard 
                            results={item} 
                            key={item.itemId} 
                         />
                        )
                    })}
                </div>
           
            </main>
        </div>
    )
}
}

export default Favorites;