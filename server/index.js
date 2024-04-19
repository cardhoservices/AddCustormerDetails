const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const Subscriber=require('./Routes/Route');
const app=express();
require('dotenv').config();

app.use(express.json());
app.use(cors());



mongoose.connect(process.env.MONGO_KEY,{
    dbName:'UserDetails'
});


app.use('/',Subscriber);
app.use('/',Subscriber);


app.listen(5000, () => {
    console.log('Server started on port 5000');
})