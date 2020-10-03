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
  
    create:function(userObject){
        // We HASH our plain text PASSWORD before sending it to our DATABASE
        userObject.body.password = bcrypt.hashSync(userObject.body.password, bcrypt.
        genSaltSync(10), null);
        db.User.create(userObject.body)
        .then(dbModel=> console.log(dbModel))
        .catch(err=>console.log(err));
    }
}
