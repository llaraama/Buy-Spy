import axios from "axios";
const BASEURL = "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query="
const FORMAT = "&format=json"
const APIKEY = "&apiKey=xtqvmkkcabv";

const AMAZONURL = "https://amazon-price1.p.rapidapi.com/search"


const URL = "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search?sponsored=1&limit=10&offset=0&store_id=3991&keyword="
const parameters = { headers: {
        "x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com",
        "x-rapidapi-key": "3700cedbf2msh1b23e722a2f09b9p12d8aajsn21b52b5b0e24"
    }}

export default {
    searchItems: function(query) {
        return axios.get(BASEURL + query + FORMAT + APIKEY);
    },

    searchAmazon: function(keyword) {
        return axios.get(AMAZONURL, {
            headers: {
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"amazon-price1.p.rapidapi.com",
                "x-rapidapi-key":"3ea418fca5msh218b03108eae83cp148",
                "useQueryString":true
            },
            params: {
                "keywords": keyword,
                "marketplace":"US"
            },
        });
    },

    saveFavorites: function (favoritesData) {
        console.log("made it to saved favorites")
        return axios.post("/api/favorites", favoritesData)
    },

    getFavorites: function() {
        return axios.get("api/favorites");
    },

    targetSearchItems: function(keyword) {
        return axios.get(URL + keyword, parameters);

    }
}
