const axios= require("axios")
const cron=require('node-cron');
const Video = require("../model/Video");


const fetchVideo=async ()=>{
  
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_KEY}&q=cricket&part=snippet&order=date&type=video&maxResults=100`);

    const data=response.data.items


    data.map(async(item)=>{
      const video=new Video({
        videoId:item.id.videoId,
        videoTitle:item.snippet.title,
        description:item.snippet.description,
        publishingDatetime:new Date(item.snippet.publishedAt),
        thumbnail:item.snippet.thumbnails.default.url

      })

      let check=await Video.findOne({videoId:video.videoId})

      if(!check){
        await video.save()
      }
    
    });
    console.log("Video fetching...")
  }

const fetchVideoCron=()=>{
  cron.schedule('*/500 * * * * *',fetchVideo)
}

module.exports=fetchVideoCron