var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: false,
    default: false
  },
  passwordConf: {
    type: String,
    required: true,
  }
});

UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

//verifies user in db returns true or false and other parameters
UserSchema.statics.authenticate = function (name, password, callback) {
  User.findOne({ username: name })
    .exec(function (err, user) {
      if (err) {
        return callback(false,err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(false,err);
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(true, user);
        } else {
          return callback(false,"wrong password");
        }
      })
    });
}

var User = mongoose.model('User', UserSchema);
module.exports = User;