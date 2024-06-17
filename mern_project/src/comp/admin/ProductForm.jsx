import { Button } from "@mui/material";
import Left from "./Left";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



function ProductForm() {

   const [Pname, setPname] = useState("")
   
   const [Pprice, setPprice] = useState("")
   
   const[Pdesc, setPdesc]= useState("")

   // const [message,setMessage] = useState("")

   const[image,setImage]=useState("")

   const navigate=useNavigate()

       function handleForm(e){

         const formData=new FormData()
         e.preventDefault()

         console.log(formData);

         formData.append("Pname",Pname)
         formData.append("Pprice",Pprice)
         formData.append("Pdesc",Pdesc)
          if(image){
            formData.append("img",image)
          }
        
         fetch("/api/insertProduct",{
            method:"POST",
           body:formData
         }).then((res)=>{
            return res.json()
         }).then((data)=>{
          console.log(data);
           if(data._id){
            toast.success("Successfully Added Product")
            navigate("/productadd")
           }else{
           toast.error("Error")
           }
            
         })
        
       }


    return ( 
        <>
        
     
        <div className="w-4/5 h-screen flex mx-auto flex-col">
         <Left/>
         <div className="w-3/5">
        
         </div>

         <h1 className="text-2xl text-center text-blue-800">Product Add Here</h1>
         <form  onSubmit={handleForm} encType="multipart/form-data" >
            <label >Product Name</label>
            <input type="text" className="border-2 form-control"
            name="Pname"
              value={Pname}
               onChange={(e)=>{setPname(e.target.value)}}
            />
            <label >Product Description</label>
            <input type="text" className="border-2 form-control"
               value={Pdesc}
               onChange={(e)=>{setPdesc(e.target.value)}}
            />
            <label >Product Price</label>
            <input type="text" className="border-2 form-control mb-7 "
               value={Pprice}
               onChange={(e)=>{setPprice(e.target.value)}}
            />
            
            <label>Upload Product Image</label>
            <input type="file" className="border-2 form-control mb-7"
            
            onChange={(e)=>{setImage(e.target.files[0])}}
            />
           
            <Button className="border-2 form-control" variant="contained" color="warning" type="submit ">Add Product</Button>
         </form>
         
        
        </div>

        </>
     );
}

export default ProductForm;