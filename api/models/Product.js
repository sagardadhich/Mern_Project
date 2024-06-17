const mongoose=require ("mongoose")

const{Schema,model}=mongoose


const ProductSchema = new Schema ({
    ProductName: String, 
    ProductPrice: Number,
    ProductDesc: String,
    productImage:String,
    status:{type:String,default:"Out-Of-Stock"}
})

const productTable=model("ProductTable",ProductSchema)

module.exports=productTable