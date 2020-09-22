const db = require("../models");
  
module.exports={
    findAll: function(req, res) {
        db.Favorites
          // .find(req.query)
          .find({})
          .sort({ itemname: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

      create: function(req, res) {

        console.log("Hit Create Route /api/favorites");
        // console.log(req.body);

        // Create something here 
        let tempObj = {
          itemId: req.body[0].itemId,
          image: req.body[0].largeImage,
          name: req.body[0].name,
          salePrice: req.body[0].salePrice,
          productUrl: req.body[0].productUrl
        }

        console.warn(tempObj);
        console.log("**********");

        db.Favorites
          .create(tempObj)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }

}