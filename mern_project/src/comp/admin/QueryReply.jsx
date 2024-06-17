import { Button } from "@mui/material";
import Left from "./Left";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function QueryReply() {

    const{id}=useParams()
    
    const navigate=useNavigate()

    const[mailto,setMailto] = useState("")

    const[mailFrom,setMailFrom] = useState("")
    
    const[mailSub,setMailSub] = useState("")
    
    const[mailBody, setMailBody] = useState("")

    function handleSubmit(e){
         e.preventDefault()
         const formData={mailto,mailSub,mailFrom,mailBody}
        fetch(`/api/queryreplydata/${id}`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formData)
            
         }).then((res)=>{
           return res.json()
         }).then((data)=>{
            if(data.message){
                       navigate("/query")
                   }
         })
            
    }


    return ( 
        <>
       <div className="w-4/5 h-screen flex mx-auto flex-col">
         <Left/>
         <div className="w-3/5">
        
         </div>

         <h1 className="text-2xl text-center text-blue-800">E-MAIL</h1>
         <p className="text-center text-red-700"></p>
         <form onSubmit={handleSubmit} >
            <label >From</label>
            <input type="text" className="border-2 form-control"
             value={mailFrom}
             onChange={(e)=>{setMailFrom(e.target.value)}}
            />
            <label >To</label>
            <input type="text" className="border-2 form-control"
               value={mailto}
               onChange={(e)=>{setMailto(e.target.value)}}
            />
            <label >Sub</label>
            <input type="text" className="border-2 form-control mb-8"
             value={mailSub}
             onChange={(e)=>{setMailSub(e.target.value)}}
            />

           <label>Body</label>
           <textarea className="border-2 form-control mb-5"
           value={mailBody}
           onChange={(e)=>{setMailBody(e.target.value)}}
           ></textarea>  
           
            <Button className="border-2 form-control" variant="contained" color="success" type="submit ">Send E-mail</Button>
         </form>
         
        
        </div>
        </>
     );
}

export default QueryReply;