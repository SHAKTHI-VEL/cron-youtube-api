const express=require('express')
const getVideo = require('../controller/getVideo')
const getVideoByTitle = require('../controller/getVideoByTitle')
const router=express.Router()

router.route('/allvideo').get(getVideo)
router.route('/video').get(getVideoByTitle)

module.exports=router