var CronJob = require('cron').CronJob;
const Video = require('../models/videos');
const axios = require('axios');

let job = new CronJob('* * 1 * * *',async function () {
    let pageToken;
    let url;
    if(pageToken){
        url=`https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}&q=sports&part=snippet&maxResults=50&type=video&pageToken=${pageToken}`;
    }else{
        url=`https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY}&q=sports&part=snippet&maxResults=50&type=video`;
    }

    let data=await axios.get(url);
    
    data=data.data;
    pageToken=data.nextPageToken;
    for (let i = 0; i < data.items.length;i++) {
        Video.create({
            kind: data.items[i].kind,
            title: data.items[i].snippet.title,
            description: data.items[i].snippet.description,
            publishTime: data.items[i].snippet.publishTime,
            videoId: data.items[i].id.videoId,
            channelId: data.items[i].snippet.channelId
        })
    }; 
}, null, true, 'Asia/Kolkata');

module.exports=job