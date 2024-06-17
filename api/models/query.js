const mongoose=require("mongoose")


const{Schema,model}= mongoose

const querySchema=Schema({
    Email:String,
    Query:String,
    status:{type:String,default:"Unread"}
})

const QueryTable = model("query",querySchema)

module.exports=QueryTable