
import { useEffect, useState } from "react";
import Cardss from "./product/Cardss";
import { Box } from "@mui/material";
import Query from "./Query";



function Product() {

   const[allProduct,setAllproduct]=useState([])


   useEffect(()=>{
     
      fetch("/api/allProducts").then((res)=>{
         return res.json()
        }).then((data)=>{
         setAllproduct(data)
        }) 

   },[])

 

 return ( 
    <>

     <Box
     sx={{
      display:"flex",
      flexWrap:"wrap",
      gap:"20px",
      marginTop:"30px"
     }}
     >
       
      {
         
         allProduct.map((value,index)=>(
       
          <Cardss key={index} productData={value} unique={index}/>
        
          ))
      }

     </Box>

    <Query/>
   
    
    
    </>
 );
}
export default Product;