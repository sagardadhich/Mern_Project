import {  useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"
import { userContext } from "./userContext";


function Login() {

   const{setLoginadmin,setLoginuser}= useContext(userContext)

    const[username,setUser]=useState("")
    const[pass,setPass]=useState("")
   // const[message,setMessage]=useState("")

     const navigate = useNavigate()

   function handleform(e){
    e.preventDefault()
     const formdata={username,pass};
     fetch("/api/checkuser",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formdata)

     }).then((res)=>{
        return res.json()
     }).then((data)=>{
        console.log(data);
        if(data.result && data.result._id){
          localStorage.setItem("user",data.result.userName)
          setLoginuser(localStorage.getItem("user"))
            if(data.result && data.result.userName==="admin"){
                toast.success("Welcome Admin")
                localStorage.setItem("admin",data.result.userName)
                setLoginadmin(localStorage.getItem("admin"))
                navigate("/admin")
                
            }else{
               toast.success("Welcome-User")
                navigate("/product")
            }
           
          
        }else if(data.message){
            toast.error("Email  & Password did not match..! ")
        }else if(data.status === "Suspended"){
          toast.error("Contact Admin..!")
        }
     })
      
   }

    return ( 
        <>
         <>
        <div className="w-full h-screen flex justify-center items-center">
         
           <div className="w-72 h-72" >
               <h1 className="text-3xl m-3 text-center font-bold text-red-600">Login </h1>
                 {/* <p >{message}</p> */}
           <form onSubmit={handleform} >
                <label htmlFor="">UserName</label>
                <input type="text" className="border-2 form-control"
                  value={username}
                  onChange={(e)=>{setUser(e.target.value)}}
                 />
                <label htmlFor="">Password</label>
                <input type="text"  className="border-2  form-control"
                  value={pass}
                  onChange={(e)=>{setPass(e.target.value)}}
                />
                <button className="btn btn-danger form-control mt-3">LOGIN</button>
                <p > New User ?<Link to={"/reg"}>Create Account</Link></p>
                
            </form>

           </div>
        </div>
        </>
        </>
     );
}

export default Login;