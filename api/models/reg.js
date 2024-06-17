const mongoose=require("mongoose")

const{Schema,model}= mongoose

const regSchema=Schema({
    userName:String,
    password:Number,
   status:{type:String,default:"Active"},
    createdate:{type:Date,default:new Date()}
})

const regTable = model("reg",regSchema)

module.exports=regTable