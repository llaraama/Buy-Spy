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
  console.log("MADE IT TO CREATE WITH AMAZON")
        console.log("Hit Create Route /api/favorites");
     
        console.log("check amazon sent")
        console.log(req.body)
        let tempObj=req.body
        // console.warn(tempObj);
        console.log("**********");

        db.Favorites
          .create(tempObj)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
          console.log("Hit Create Route /api/favorites");
        console.log(req.body);
      },


      


}