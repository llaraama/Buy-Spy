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
        let tempObj=req.body
        db.Favorites
          .create(tempObj)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

      remove:function(req,res){
        db.Favorites
        .deleteOne({itemId:req.params.id})
        .then(dbModel=>res.json(dbModel))
        .catch(err=>res.status(422).json(err));
      },

      findById: function(req, res){
        db.Favorites
        .findById(req.params.id)
        .then(dbModel=>res.json(dbModel))
        .catch(err=>res.status(422).json(err));
      },

}