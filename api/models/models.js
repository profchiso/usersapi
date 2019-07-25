const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 //defining the developers document schema
const userSchema = new Schema({
    firstname:{
        type: String,
        required: "firstname required"
    },
   lastname: {
       type: String,
       required: "lastname required"
    },
    gender:{
        type: String,
        required: "gender required"
    },
    date_of_birth:{
        type: String,
        required: "Enter date of birth"
    },
    date_created:{
        type: Date,
        default: Date.now()
        

    },
    
        date_updated:{
            type: Date,
            default: Date.now()
           
        }
    
});
 
module.exports = mongoose.model('users',userSchema );