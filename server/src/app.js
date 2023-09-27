const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');


const app=express();
app.use(morgan('combine'));
app.use(cors());
app.use(bodyParser.json())
require('dotenv').config();
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;


const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(dbDatabase, dbUsername, dbPassword, {
  host: 'localhost',
  dialect: 'mysql',
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Veritabanına başarıyla bağlandınız.');
  })
  .catch((err) => {
    console.error('Veritabanına bağlantı hatası:', err);
  });





app.get('/',(req,res)=>{
      res.send({
        message:'Anasayfa',
        
      });
});


app.post('/register',(req,res)=>{
  res.send({
    message:`Yeni bir kullanıcı eklendi Email:${req.body.email} ve Şifresi:${req.body.password}`
  });
})




const port=3000;

app.listen(port,()=>{
    console.log(`server started on ${port}`);
})