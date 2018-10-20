var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  cost: {
    type: Number,
    required: true,
    default: 0
  },
  amount: {
    type: Number,
    required: false,
    default: 0
  },
  category: {
    type: [String],
    required: false
  },
  active: {
    type: Boolean,
    required: false,
    default: true
  }
});

ProductSchema.statics.addCategory = function(id, categories,callback){
  let newCategory;
  User.findOne({ _id: id }).exec(function (err, product) {
      if (err) {
        return callback(false,err)
      } else if (!product) {
        var err = new Error('Product not found :(');
        err.status = 401;
        return callback(false,err);
      }
      let oldCategories = product.category;
      let newCategories = oldCategories.concat(categories);

      let newValue = {category:newCategories};
      Product.update({_id: id}, newValue, function(err, raw) {
        if (err) {
          if(callback){
            callback(false,err);
          }
        }
        if(callback){
            callback(true,raw);
        }
      });

    });


  
};
ProductSchema.statics.setAmount = function(id,amount,callback){
      let newValue = {"amount":amount};
      Product.update({_id: id}, newValue, function(err, raw) {
        if (err) {
          if(callback){
            callback(false,err);
          }
        }
        if(callback){
            callback(true,raw);
        }
      });
};
ProductSchema.statics.setActive = function(id,active,callback){
      let newValue = {"active":active};
      Product.update({_id: id}, newValue, function(err, raw) {
        if (err) {
          if(callback){
            callback(false,err);
          }
        }
        if(callback){
            callback(true,raw);
        }
    });
};


ProductSchema.statics.getProducts = function(callback){
      Product.find({}, function(err, raw) {
        if (err) {
          if(callback){
            callback(false,err);
          }
        }
        if(callback){
            callback(true,raw);
        }
      });

};
ProductSchema.statics.getProductsByCategory = function(category,callback){
      
      Product.find({}, function(err, product) {
        if (err) {
          if(callback){
            callback(false,err);
          }
        }
        if(callback){
            let newProducts = [];
            for(var cat of category) {
              if(product.category.includes(cat)){
                newProducts.push(product);
                break;
              }
             
            };

            callback(true,newProducts);
        }
      });

  
};

var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;