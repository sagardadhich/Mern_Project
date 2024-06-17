import { Button } from "@mui/material";
import Left from "./Left";
import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from "react-hot-toast";





function ProductAdd() {

    const[productdata,setProductData]=useState([])
    const navigate=useNavigate()
   

    useEffect(()=>{
        fetch("/api/productData").then((res)=>{
            return res.json()
        }).then((data)=>{
         
            setProductData(data)
        })
    },[])

    function handleDelete(e,id){
        fetch(`/api/adminproductdelete/${id}`,{
            method:"DELETE",
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            if(data.message){
                toast.success("Sucessfully Deleted")
              navigate("/productadd")
            }
        })
    }
   
   
        
    return ( 
        <>
        
       
     
        <div className="w-4/5 h-screen flex mx-auto flex-col">
         <Left/>
         <div className="w-3/5">
        
         </div>

         <h1 className="text-2xl text-center text-red-800">Product Management</h1>
          <Link to={"/productform"} ><Button variant="contained" color="success" className="form-control" >Add Product Here </Button></Link>
         <table className="table table-hover table-striped mt-3">

            <thead>
            <tr className="border-2 table-warning" >
                <th>Product Name</th>
                <th>Product-Image</th>
                <th>Product Description</th>
                <th>Product Price</th>
                <th>Product Status</th>
                <th>Update Product</th>
                <th>Delete Product</th>
                <th>Delete</th>
             </tr>
            </thead>
            
             {
                productdata.map((value)=>(
                    <tbody>
                    
                    <tr className="border-2">
                    <td>  {value.ProductName}</td>
                    <td> <img src={`/uploads/${value.productImage}` } width={"100px"}/> {value.productImage}</td>
                    <td>{value.ProductDesc}</td>
                    <td>{value.ProductPrice}</td>
                    <td>{value.status}</td>
                    <td><Link to={`/updateproduct/${value._id}`}><Button startIcon={<UpdateIcon/>} color="success">Update</Button></Link></td>
                    <td> <Link to={`/deleteproduct/${value._id}`}><Button startIcon={<DeleteIcon/>} color="error">Delete</Button></Link></td>
                    <td><Button onClick={(e)=>{handleDelete(e,value._id)}}>Delete</Button></td>
                </tr>

                    </tbody>
                   
                ))
             }
             
         </table>
        </div>

        </>
     );
}

export default ProductAdd;