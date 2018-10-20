var express = require('express');
var router = express.Router();
var Product = require('../src/mongo/product_scheme');
var bodyParser = require('body-parser');


/* GET users listing. */
router.post('/create', bodyParser.urlencoded({ extended: true }),function(req, res, next) {
  if (req.body.name &&
  req.body.cost) {
    //get category else empty
    //let newCategory = (req.body.category) ? req.body.category : [];
    //let newAmount = (req.body.amount) ? req.body.amount : 0;


  var productData = {
    name: req.body.name,
    cost: req.body.cost,

  }
  //use schema.create to insert data into the db
  Product.create(productData, function (err, product) {
    if (err) {
      console.log("failed to create product: " + productData.name);
      //return next(err)
      console.log(err);
       res.send({valid:true, "err": err});
    } else {
      console.log("sucefully create product: " + productData.name)
      res.send({valid:true, "name": productData.name});
    }
  });
}else{
  res.send({valid:false,err:"Incorrectus parameters","data": [req.body.name,req.body.cost]});
}

});

router.get('/list', bodyParser.urlencoded({ extended: true }),function(req, res, next) {
        Product.getProducts(
        function(valid,products){
          if(valid){
            res.send({"valid":valid,data:products});
          }else{
            res.send({"valid":valid,err:"Error ejecutando query"});
          }
        }
      );

});


router.post('/set_amount', bodyParser.urlencoded({ extended: true }),function(req, res, next) {
        if (req.body.id && req.body.amount){
        let id = req.body.id;
        let amount = req.body.amount;
        //console.log(amount);
        Product.setAmount(id, amount,
        function(valid,result){
          if(valid){
            res.send({"valid":valid,data:result});
          }else{
            res.send({"valid":valid,err:"Error all cambiar cantidad de producto",other:result});
          }
        }
      );

      }else{
        res.send({valid:false, err:"Invalid request parameters"})
      }

});

module.exports = router;
