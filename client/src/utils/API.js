import axios from "axios";
const BASEURL = "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query="
const FORMAT = "&format=json"
const APIKEY = "&apiKey=xtqvmkkcabv8w66e7rnwtt8x";
const AMAZONURL = "https://amazon-price1.p.rapidapi.com/search"


export default {
    
    searchItems: function(query) {
        return axios.get(BASEURL + query + FORMAT + APIKEY);
    },

    searchAmazon: function(keyword) {
        return axios.get(AMAZONURL, {
            headers: {
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"amazon-price1.p.rapidapi.com",
                "x-rapidapi-key":"3ea418fca5msh218b03108eae83cp1485c4jsn054b7949e9ab",
                "useQueryString":true
            },
            params: {
                "keywords": keyword,
                "marketplace":"US"
            },
        });
    }
}
