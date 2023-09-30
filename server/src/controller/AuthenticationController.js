const {User}=require('../models/index');
const jwt=require('jsonwebtoken');
const config=require('../config/config.json');

function jwtSignuser(user) {
  const ONE_WEEK=60*60*24*7;
   return jwt.sign(user,config.jwtSecret,{
    expiresIn:ONE_WEEK
   });
}
module.exports = {
  async register(req, res) {
    try {
      const user = await User.create({
        email: req.body.email,
        password:req.body.password
      });
     
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
   
  },

  async home(req, res) {
    res.send({
      message: "Anasayfa",
    });
  },

  async login(req,res){
    try {
      const user=await User.findOne({
        where:{
          email:req.body.email,
          password:req.body.password
        }
      });
      const userJson=user.toJSON();
       res.send({
        user:userJson,
        token:jwtSignuser(userJson),
       });
      
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


};
