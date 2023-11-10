const mongoose=require('mongoose')

const videoSchema=new mongoose.Schema({
    videoId:{
        type:String
    },
    videoTitle:{
        type:String
    },
    description:{
        type:String
    },
    publishingDatetime:{
        type:Date
    },
    thumbnail:{
        type:String
    }
})

videoSchema.index({videoTitle:'text',description:'text'})
const Video=mongoose.model('video',videoSchema)

module.exports=Video