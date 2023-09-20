

module.exports.home = (req, res)=>{
   console.log(req.cookies);
   res.cookie('something', 12);
 res.cookie('user_id', 25);
   return res.render('home', {
    title: "Home"
   });
};

