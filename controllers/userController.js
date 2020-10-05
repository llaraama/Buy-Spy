const db = require("../models");
const bcrypt = require("bcryptjs");
const passport = require("passport");

module.exports = {
    loginUser: function (req, res) {
        db.User
            .find({
                username: req.body.username,
            })
            .then(dbModel => {
                let user = dbModel[0];
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return res.json(user);
                    } else {
                        return res.json({success: false, message: 'user name or password do not match'});
                    }
                });
            })
            .catch(err => res.status(422).json(err));
    },
  
    create:function(req,res){
        // We HASH our plain text PASSWORD before sending it to our DATABASE
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.
        genSaltSync(10), null);
        db.User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err=>console.log(err));
    }
}
