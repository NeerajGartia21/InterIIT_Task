const express = require('express');
require('dotenv').config();
const db=require('./config/mongoose');
const job=require('./utils/index');
const Video=require('./models/videos')

const app = express();

job.start();

app.get('/getVideos',async(req,res)=>{
  let videos=await Video.find({});
  return res.json({
    success:true,
    data:{videos:videos.slice((req.query.page-1)*20,req.query.page*20)}
  }) 
})

app.get('/getTotalVideos',async(req,res)=>{
  let videos=await Video.find({});
  return res.json({
    success:true,
    data:{length:videos.length}
  }) 
})



 
app.listen(process.env.PORT);
