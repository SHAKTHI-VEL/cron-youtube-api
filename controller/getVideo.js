const Video = require("../model/Video")

const getVideo=async (req,res)=>{

    try {

    const page=parseInt(req.query.page) || 1;
    const limit=parseInt(req.query.limit) || 10;
    const videoCollection=await Video.find().sort({publishingDatetime:'desc'}).skip((page-1)*limit).limit(limit)

    res.status(201).json({success:true,videoCollection})
    
} catch (error) {
        res.status(500).json({success:false,message:"Internal server error"})
    }

    
}

module.exports=getVideo