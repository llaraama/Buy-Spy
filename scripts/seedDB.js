const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/favorites"
);

const favoritesSeed = [
  {
    itemId:"1515831",
    image:"none",
    name:"standup desk",
    salePrice:"$400",
    productUrl:"www.walmart.com",
  },
  {
    itemId:"156151",
    image:"none",
    name:"Macbook",
    salePrice:"$1099",
    productUrl:"www.target.com",
  
  }
];

db.Favorites
  .remove({})
  .then(() => db.Favorites.collection.insertMany(favoritesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // ***********authentication start to the username and password section of the app
    // demo code 

    const userSeed = [
      {
        username:"llaraama3",
        password:"*****"
      }
    ];



    db.User
      .remove({})
      .then(() => db.User.collection.insertMany(userSeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
