import axios from 'axios';

    axios({
      "method":"GET",
      "url":"https://amazon-price1.p.rapidapi.com/search",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"amazon-price1.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "useQueryString":true
      },"params":{
      "keywords":"laptop",
      "marketplace":"US"
      }
      })
      .then((response)=>{
        console.log(response)
        let res = response.data;
        console.log(res)
      })
      .catch((error)=>{
        console.log(error)
      })





