import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Reg() {

    const[Username,setUser]=useState("")
    const[Pass,setPass]=useState("")
   const navigate = useNavigate()

    function handleForm(e){
      e.preventDefault()
      const formData  = {Username,Pass}
      fetch("/api/reginsert",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(formData)
      }).then((res)=>{
          return res.json()
      }).then((data)=>{
          console.log(data)
          if(data.record && data.record._id){
              toast.success("Successfully Registered..!")
              navigate("/login")
          }else if(data.message){
              toast.error("UserName Already Exist")
          }
      })
  }
    
    return ( 
        <>
        <div className="w-full h-screen flex justify-center items-center">
         
           <div className="w-72 h-72" >
               <h1 className="text-3xl m-3 text-center font-bold text-green-900">Registration </h1>
            
           <form onSubmit={handleForm} >
                <label htmlFor="">UserName</label>
                <input type="text" className="border-2 form-control"
                 value={Username}
                 onChange={(e)=>{setUser(e.target.value)}}
                 />
                <label htmlFor="">Password</label>
                <input type="text"  className="border-2  form-control"
                value={Pass}
                onChange={(e)=>{setPass(e.target.value)}}
                />
                <button className="btn btn-success form-control mt-3">REGISTRATION</button>
                <p> Already a Customer ?<Link to={"/login"}>Register</Link></p>
                
            </form>

           </div>
        </div>
        </>
     );
}

export default Reg;