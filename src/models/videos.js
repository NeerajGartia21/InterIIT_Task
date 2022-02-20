const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
    kind:String,
    title:String,
    description:String,
    publishTime:String,
    videoId:String,
    channelId:String
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;