const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
require('dotenv').config();

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique:true,
        trim: true,
        lowercase: true,
      
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    },
   
},{
   timestamps:true
});




userSchema.pre('save',async function(next){ 
    let user = this; 

     if(user.isModified('password')){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password,salt);
        user.password = hash;
    }
    console.log(user) 
    next();
});





userSchema.statics.userTaken = async function(username){
    const user = await this.findOne({username});
    return !!user; 
}




userSchema.methods.GenerateToken =  function(){
    let user = this ; 
    const useObj= {_id : user._id.toHexString(), username : user.username}
    const token = jwt.sign(useObj ,process.env.DB_TOKEN ,{expiresIn:'1d'} )
    return token
}





userSchema.methods.deCryptPassword = async function(password){
    let user = this;
    const decrypt = await bcrypt.compare(password , user.password)
    return decrypt
}
const User =  mongoose.model("User" , userSchema)
module.exports = {User}
