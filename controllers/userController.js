const db = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");


module.exports={

    findOne:function(){
        db.User
        .find({
         
            // place id or validation here
        })
          .sort({ itemname: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create:function(userObject){
        console.log("sent the route correctly")
        console.log(userObject.body)
        // We HASH our plain text PASSWORD before sending it to our DATABASE
        userObject.body.password = bcrypt.hashSync(userObject.body.password, bcrypt.
        genSaltSync(10), null);
        console.log(userObject.body)
        db.User.create(userObject.body)
        .then(dbModel=> console.log(dbModel))
        .catch(err=>console.log(err));


    }

}