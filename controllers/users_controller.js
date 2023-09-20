const User = require('../models/user');


module.exports.profile = function(req, res){
   return res.render('profile', {
    title: "Users Section"
   });
};

//render the signup page
module.exports.signUp = (req, res)=>{
   return res.render ('user_sign_up', {
      title: "Codeial | SignUp"
   })
};


//render the sign in page
module.exports.signIn = (req, res)=>{
   return res.render ('user_sign_in', {
      title: 'Codeial | SignIn'
   })
}

// get the sign up data
module.exports.create = function(req, res){
   if (req.body.password != req.body.confirm_password){
       return res.redirect('back');
   }

   User.findOne({email: req.body.email})
   .then((user)=>{
      if (!user) {
         User.create(req.body)
         .then (()=>{
            return res.redirect('/users/sign-in');
         })
         .catch((err)=>console.log('error in creating the list'))
         }
         else {
            return res.redirect('back');
         }
     })
     

   .catch((err)=>{
      console.log('error in finding user in signing up'); return
   }
   )
}

//creating the user-signup

// module.exports.create=(req,res)=>{
//    if(req.body.passowrd != req.body.confirm_password){
//       return res.redirect('back');
//    }
//    User.findOne ({email:req.body.email}, function(err,user){
//       if (err){console.log('error in finding user in signing up'); return}

//       if (!user) {
//          User.create(req.body, function(err, user){
//             if (err){console.log('error in creating user in signing up'); return }
//             return res.redirect('/users/sign-in');
//          })
//       }
//       else {
//          return res.redirect('back');
//       }
//    });
// }

//sign in and creating the user session
module.exports.createSession=(req,res)=>{
   //todo later
}