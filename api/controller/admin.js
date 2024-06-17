const RegCollection=require("../models/reg")

const ProductCollection=require("../models/Product")

const QueryCollections= require("../models/query")

const nodemailer=require("nodemailer")







exports.productinsertController = async (req,res)=>{
      
    const imageName=req.file.filename
    
    
    const{Pname,Pprice,Pdesc} = req.body
      
    // if(!Pname || !Pprice || !Pdesc){
    //   return res.status(400).json({message:"Please Enter Product Details..!"})
    // }
      
        const record=await new ProductCollection({
            ProductName: Pname, 
            ProductPrice: Pprice ,
            ProductDesc: Pdesc,
            productImage:imageName    
        })
        
        await record.save()
        res.json(record)
}

exports.productDataController= async(req , res)=>{
    const record = await ProductCollection.find()
    res.json(record)
}

 
exports.updateFormController=async (req,res)=>{
    const ProductId=req.params.productid

  const record= await ProductCollection.findById(ProductId)
  res.json(record)
}

exports.updateProductController=async(req,res)=>{
    const id=req.params.id
    console.log(req.body);
    const {Pname,Pdesc,Pprice,Pstatus}=(req.body);
    
   const record= await ProductCollection.findByIdAndUpdate(id,{
        ProductName: Pname, 
        ProductPrice: Pprice ,
        ProductDesc: Pdesc,
        status:Pstatus
    })
    res.json(record)
}

exports.deleteProductController=async(req,res)=>{
   const id=req.params.id
 const record= await ProductCollection.findByIdAndDelete(id)
    res.json({message:"Successfully Delete"})
}


exports.allProductsController = async(req,res)=>{
    const record = await ProductCollection.find({status:"In-stock"})
    res.json(record)
}

exports.allProductsController=async(req,res)=>{
   const record=await ProductCollection.find({status:"In-Stock"})
   res.json(record)
}

exports.queryProductController=async(req,res)=>{
    const {email,query}=(req.body);

   const record=await new QueryCollections({
        Email:email,
        Query:query
    })
   await record.save()
   res.json(record)
}

exports.querydataController=async(req,res)=>{
   const record=await QueryCollections.find()
   res.json(record)
}


 exports.queryReplyController=async(req,res)=>{
    
    const id= req.params.query
   
    const record=await QueryCollections.findById(id)
   
      const{mailSub,mailBody}=req.body
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "sagardadhich@gmail.com",
          pass: "mcajapbczpnxfliw",
        },
      });

      const info = await transporter.sendMail({
        from:"sagardadhich82@gmail.com", // sender address
        to:record.Email, // list of receivers
        subject: mailSub, // Subject line
        text:mailBody, // plain text body
        html: mailBody, // html body
      });

     await QueryCollections.findByIdAndUpdate(id,{
        status:"Read"
      })
      res.json({message:"Successfully Send Mail"})
}

 


exports.userDataController=async(req,res)=>{
    const record=await RegCollection.find().sort({createDate:-1})
    res.json(record)
}

exports.userStatusController=async(req,res)=>{
    const id=req.params.id

   const record=await RegCollection.findById(id)
   let newStatus=null
   if(record.status=="active"){
    newStatus="Suspended"
   }else{
    newStatus="active"
   }

  const data= await RegCollection.findByIdAndUpdate(id,{
       status:newStatus
   })
   res.json(data)
}

exports.cartDataController=async(req,res)=>{
  const {ids}=req.body
 const record=await ProductCollection.find({_id:{$in:ids}})
  res.json(record)
}