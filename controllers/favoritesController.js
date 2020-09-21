const db = require("../models");
  
module.exports={
    findAll: function(req, res) {
        db.Favorites
          .find(req.query)
          .sort({ itemname: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

      create: function(req, res) {
        db.Favorites
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }


}