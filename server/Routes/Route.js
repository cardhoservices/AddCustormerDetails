const express=require('express');
const Subscriber=express();
const {subscription,getData,deleteData,getdatabyid,updateData}=require('../Constructor/Controler');

Subscriber.get('/get',getData)
Subscriber.post('/post',subscription)
Subscriber.delete('/delete/:id',deleteData)
Subscriber.put('/update/:id',updateData)
Subscriber.get('/getdatabyid/:id',getdatabyid)


module.exports=Subscriber