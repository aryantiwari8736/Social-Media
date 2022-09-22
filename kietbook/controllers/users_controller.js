module.exports.profile= function(req,res){
    return res.send("<h1>Hello I am from users routes </h1>");
}
module.exports.signup=function(req,res){
    return  res.render('signup');
  }
  module.exports.login=function(req,res){
    return  res.render('login');
  }