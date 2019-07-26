const mongoose = require('mongoose');

const User = mongoose.model('users');


let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+'T'+time;


//controller to view all developers
exports.list_all_users =(req,res)=>{
    User.find({},(err,user)=>{
        if(!err){
            res.json(user)
        }else{
            res.send(err);
        }

    });
};

//controller to add a user
exports.add_user =(req,res)=>{
    let newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender,
        date_of_birth: req.body.date_of_birth,
        date_created: dateTime,
        date_updated: dateTime
    });

    newUser.save((err,user)=>{
        if(!err){
            res.json(user)
        }else{
            res.json(err);
        }

    });  
};

//controller to view a user by id
exports.read_a_user = (req,res)=>{
    User.findById({_id: req.params.userId},(err,user)=>{
        if(!err){
            res.json(user);
        }else{
            res.send(err);
        }

    });

};


//controller update all user record by id

exports.update_all_users_details =(req,res)=>{
    User.findOneAndUpdate(
        {_id : req.params.userId},
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            date_of_birth: req.body.date_of_birth,
            //date_created: dateTime,
            date_updated: dateTime
        },
        {overwrite: true},
        (err)=>{
            if(!err){
                res.send(`update of ${req.params.userId} successful`);
            }else{
                res.send(err);
            }
        }
      )
};

//to update some users record by id
exports.update_some_users_details =(req,res)=>{
    User.updateOne({_id: req.params.userId},{$set: req.body},
        (err)=>{
            if(!err){
                res.send(`update successful for ${req.params.userId}`)
            }else{
                res.send(err);
            }
        }
        )
};

// controller to delete the user
exports.delete_a_user =(req,res)=>{
    User.deleteOne({_id : req.params.userId},(err,developer)=>{
        if(!err){
            res.json({status: `user with id ${req.params.userId} deleted`});
        }else{
            res.send(err);
        }
    })
};

//controller  to view by firstname
exports.user_firstname=(req,res)=>{
    User.find({firstname: req.params.firstname},(err,users)=>{
        if(!err){
            res.json(users);
        }else{
            res.send(err);
        }

    });
};

//controller  to view by lastname
exports.user_lastname=(req,res)=>{
    User.find({lastname: req.params.lastname},(err,users)=>{
        if(!err){
            res.json(users);
        }else{
            res.send(err);
        }

    });
};

//controller  to view by gender
exports.user_by_gender=(req,res)=>{
    User.find({gender: req.params.gender},(err,users)=>{
        if(!err){
            res.json(users);
        }else{
            res.send(err);
        }
    });
};

//controller to sort by firstname
exports.sort_users_first=(req,res)=>{

    User.find({},(err,user)=>{
        if(!err){
            res.json(user.sort((a, b) => (a.firstname.toLowerCase() > b.firstname.toLowerCase()) ? 1 : -1));
        }else{
            res.send(err);
        }

    });

}
// controller to sort by last name
exports.sort_users_last=(req,res)=>{

    User.find({},(err,user)=>{
        if(!err){
            res.json(user.sort((a, b) => (a.lastname.toLowerCase() > b.lastname.toLowerCase()) ? 1 : -1));
        }else{
            res.send(err);
        }

    });

}