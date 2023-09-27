const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');


const app=express();
app.use(morgan('combine'));
app.use(cors());
app.use(bodyParser.json())


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