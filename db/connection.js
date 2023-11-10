const mongoose=require('mongoose')

const connection=async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log("DB connected sucessfully");
}

module.exports=connection