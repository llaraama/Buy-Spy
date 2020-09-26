import React, {Component} from "react";
// import WalmartCard from "../WalmartCard"
import API from "../../utils/API"
// import AmazonCard from "../AmazonCard"
import FavoritesCard from "../../components/FavoritesCard"


class Favorites extends Component{
  
state={
    dbResults:[],
    dbAmazonResults: []

};
componentDidMount(){
    API.getFavorites()
        .then(data =>{
            console.log("this is it ")
            console.log(data.data);
            this.setState({ dbResults: data.data})
        })
        .catch (err=> console.log(err))

        API.getFavorites()
        .then(data =>{
            console.log("this is it ")
            console.log(data.data);
            this.setState({ dbAmazonResults: data.data})
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
                            <FavoritesCard
                            results={item} 
                            key={item.itemId} 
                            
                         />
                        )
                    })}
                </div>
                {/* <div className="flex flex-wrap justify-center">
                        {this.state.dbAmazonResults.map(itemAmazon => {
                            return( 
                                <AmazonCard
                                amazonResults= {itemAmazon} 
                                key={itemAmazon.asin} 
                               />
                            )
                        })}
                    </div> */}
           
            </main>
        </div>
    )
}
}

export default Favorites;