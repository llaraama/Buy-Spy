import axios from "axios";
const BASEURL = "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query="
const FORMAT = "&format=json"
 // api key is a placeholder to avoid access api calls
//  walmart api
const APIKEY = "";
const AMAZONURL = "https://amazon-price1.p.rapidapi.com/search"

const URL = "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?sponsored=1&limit=10&offset=0&store_id=3991&keyword="
const parameters = { headers: {
        "x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com",
        // placeholder for the target api
        "x-rapidapi-key": process.env.REACT_APP_TARGET_API_KEY
    }}

export default {
    searchItems: function(query) {
        return axios.get(BASEURL + query + FORMAT + APIKEY);
    },

    // api key is a placeholder to avoid access api calls
    searchAmazon: function(keyword) {
        return axios.get(AMAZONURL, {
            headers: {
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"amazon-price1.p.rapidapi.com",
                // placeholder for the amazon api
                "x-rapidapi-key": process.env.REACT_APP_TARGET_API_KEY,
                "useQueryString":true
            },
            params: {
                "keywords": keyword,
                "marketplace":"US"
            },
        });
    },

    saveFavorites: function (favoritesData) {
        return axios.post("/api/favorites", favoritesData)
    },

    getFavorites: function() {
        return axios.get("api/favorites");
    },

    removeFavorites:function(id){
        return axios.delete("api/favorites/"+id);

    },

    addUser:function(userData){
        return axios.post("api/users",userData)
    },

    targetSearchItems: function(keyword) {
        return axios.get(URL + keyword, parameters);
    },

    loginUser: function (userData) {
        return axios.post("api/users/login",userData)
    }
}
