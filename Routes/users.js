const router = require("express").Router();
let User = require("../models/user.model");

router.route("/:uid?").get((req, res) => {
  var uid = req.params.uid;
  var qry = uid == undefined ? {} : { _id: uid };
  User.find(qry)
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/add").post((req, res) => {
  const userName = req.body.username;
  const newUser = new User({ userName });

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
