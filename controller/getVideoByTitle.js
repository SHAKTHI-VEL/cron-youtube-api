const Video = require("../model/Video")

const getVideoByTitle=async(req,res)=>{


    try {

        const {title,description}=req.body;

        if(title){
            const videos=await Video.find({videoTitle:title})
            if(videos.length!=0){
                return res.status(201).json({success:true,videos});
            }else{

                const closevideos=await Video.find({$text:{$search:title}})
                return res.status(201).json({success:true,videos:closevideos});
            }
        }
    
        if(description){
            const videos=await Video.find({description:description})
            
            if(videos.length!=0){
                return res.status(201).json({success:true,videos});
            }else{
                const closevideos=await Video.find({$text:{$search:description}})
                return res.status(201).json({success:true,videos:closevideos});
            }
        }
        
    } catch (error) {
        
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }

   
    
}

module.exports=getVideoByTitle