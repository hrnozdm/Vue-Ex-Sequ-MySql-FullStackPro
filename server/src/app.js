const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const routes=require('./routes');
const app=express();
const model=require('./models/index')



app.use(morgan('combine'));
app.use(cors());
app.use(bodyParser.json())
require('dotenv').config();
routes(app)

// model.User.sync({force:true})
model.Song.sync()







const port=3000;

app.listen(port,()=>{
    console.log(`server started on ${port}`);
})