var express = require('express');
var router = express.Router();
var User = require('../src/mongo/user_scheme');
var bodyParser = require('body-parser');


/* GET users listing. */
router.post('/', bodyParser.urlencoded({ extended: false }),function(req, res, next) {

if (req.body.username &&
  req.body.password) {
  let username = req.body.username;
  let password = req.body.password;

  //use schema.create to insert data into the db
  //handles authentication result
  User.authenticate(username,password, function(valid, data){handleAuthentication(res,valid,data)});

}else{
  res.send({valid:false});
}

});

function handleAuthentication(res, valid,data){
    res.send({"valid": valid, "data":data});
}

module.exports = router;
