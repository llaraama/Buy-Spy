const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactinventory"
);

const inventorySeed = [
  {
    itemname: "desk",
    price: "$120",
    urlsite:
      "wwww.google.com",
    category: "furniture"
  },
  {
    itemname: "laptop stand",
    price: "$30",
    urlsite:
      "wwww.amazon.com",
    category: "accessories"
  
  }
];

db.Inventory
  .remove({})
  .then(() => db.Inventory.collection.insertMany(inventorySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  const favoritesSeed = [
    {
      itemname: "desk",
      price: "$120",
      urlsite:
        "wwww.google.com",
      category: "furniture"
    },
    {
      itemname: "laptop stand",
      price: "$30",
      urlsite:
        "wwww.amazon.com",
      category: "accessories"
    
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


    // authentication start to the username and password section of the app
    // demo code 
  
    const userSeed = [
      {
        username:"llaraama",
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
     