import axios from "axios";
const BASEURL = "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query="
const FORMAT = "&format=json"
const APIKEY = "&apiKey=xtqvmkkcabv8w66e7rnwtt8x";

export default {
    searchItems: function(query) {
        return axios.get(BASEURL + query + FORMAT + APIKEY);
    }
};
