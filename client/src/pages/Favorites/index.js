import React, {Component} from "react";
// import WalmartCard from "../WalmartCard"
import API from "../../utils/API"
// import AmazonCard from "../AmazonCard"
import FavoritesCard from "../../components/FavoritesCard"


class Favorites extends Component{
  
state={
    dbResults:[]
   
 

};
componentDidMount(){
    API.getFavorites()
        .then(data =>{
            this.setState({ dbResults: data.data})
        })
        .catch (err=> console.log(err))

        // API.getFavorites()
        // .then(data =>{
        //     console.log("this is it ")
        //     console.log(data.data);
        //     this.setState({ dbAmazonResults: data.data})
        // })
        // .catch (err=> console.log(err))


}

removeFavoritesData=id=>{
    let foundItem=this.state. dbResults.filter(itemRemoval=>{
        return itemRemoval.itemId==id;
    });

    let tempRemove = {
        itemId: foundItem[0].itemId,
        image: foundItem[0].image,
        name: foundItem[0].name,
        salePrice: foundItem[0].salePrice,
        productUrl: foundItem[0].productUrl,
        logo:foundItem[0].logo
      }
      console.log("this is the item getting deleted")
      console.log(tempRemove)
     
      API.removeFavorites(tempRemove)
      .then(res=>{
          console.log("Item removed");
          console.log(res.data);
      })
      .catch(err=>{
          console.log(err)
      })

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
                            removeFavs={this.props.removeFavorites}
                            removeFavoritesData={this.removeFavoritesData}
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