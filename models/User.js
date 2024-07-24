const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
},
number:{
    type:Number,
    required:true
},

age:{
    type:Number,
    required:true
},
clases:{
    type:String,
    required:true
},
rollno:{
    type:Number,
    required:true
},

email:{
    type:String,
     unique:true,
    required:true
},
password:{
    type:String,
    required:true
},
});

module.exports = mongoose.model('User', userSchema);
