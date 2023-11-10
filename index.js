const express=require('express')
const fetchVideo = require('./utils/fetchVideoCron')
const connection = require('./db/connection')
const api=require('./routes/api')
const app=express()

app.use(express.json())
const dotenv=require('dotenv').config()
connection()
fetchVideo()

const PORT=process.env.PORT

app.use(api)

app.listen(PORT,()=>{
    console.log(`Youtube fetching api running on ${PORT}`);
})