var express = require('express');
var router = express.Router();
var User = require('../src/mongo/user_scheme');
var bodyParser = require('body-parser');


/* GET users listing. */
router.post('/', bodyParser.urlencoded({ extended: true }),function(req, res, next) {
  console.log("request of register");
  console.log("email: " + req.body.email);
  console.log("username: " + req.body.username);
  console.log("password: " + req.body.password);
  console.log("passwordConf: " + req.body.passwordConf);
  if (req.body.email &&
  req.body.username &&
  req.body.password &&
  req.body.passwordConf) {
  var userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    passwordConf: req.body.passwordConf,
  }
  //use schema.create to insert data into the db
  User.create(userData, function (err, user) {
    if (err) {
      console.log("failed to create user: " + userData.username);
      return next(err)
    } else {
      console.log("sucefully create user: " + userData.username)
      res.send({valid:true, username: userData.username});
    }
  });
}else{
  res.send({valid:false});
}

});

module.exports = router;
