const { DataTypes,Sequelize } = require('sequelize');
const config = require('../config/config.json');


const sequelize=new Sequelize(config.development)
// Model tanımlama
const User = sequelize.define('User', {
  
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  
});

module.exports=User;