import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function Delete() {

    const{id}=useParams()

    const navigate=useNavigate()

    useEffect(()=>{

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
    },[])

   
    return (  
        <>
        {id}
        <h1>Loading..!!</h1>
        </>
    );
}

export default Delete;