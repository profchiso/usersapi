module.exports = (app)=>{
    const users = require('../controllers/controllers');

    //route to view all developer and also to add a developer
    app.route('/users')
    .get(users.list_all_users)
    .post(users.add_user);

    //route by id
    app.route('/users/:userId')
    .get(users.read_a_user)
    .put(users.update_all_users_details)
    .patch(users.update_some_users_details)
    .delete(users.delete_a_user);

   //route to get a user by firstname
   app.route('/users/firstname/:firstname')
   .get(users.user_firstname);

   //route to get user by lastname
   app.route('/users/lastname/:lastname')
   .get(users.user_lastname);

  

   // route to get by gender
   app.route('/users/gender/:gender')
   .get(users.user_by_gender);

   //sort  be  firstname route

   app.route('/users/sort/firstname')
    .get(users.sort_users_first);

     //sort  be  lastname route

   app.route('/users/sort/lastname')
   .get(users.sort_users_last);
     
};