const {User}=require('../models/index')
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

  home(req, res) {
    res.send({
      message: "Anasayfa",
    });
  },


};
