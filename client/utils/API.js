import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    getKeyboard: function() {
        return axios.get("https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/search?query=desk&format=json&apiKey=xtqvmkkcabv8w66e7rnwtt8x");
    },
    
};
