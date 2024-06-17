
import { useState } from "react";
import Left from "./Left";
import { Button } from "@mui/material";

function User() {

    const[userData,setUserData]=useState([])

   fetch("/api/userdata").then((res)=>{
    return res.json()
   }).then((data)=>{
    setUserData(data)
   })

   function updateStatus(id){
    fetch(`/api/updateStatus/${id}`).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data);
    })
   }

    return ( 
        <>
          <div className="w-4/5 h-screen flex mx-auto flex-col">
         <Left/>
         <div className="w-3/5">
        
         </div>

         <h1 className="text-2xl text-center text-red-800">User Management</h1>
          <table className="table table-hover table-striped mt-3">

            <thead>
            <tr className="border-2 table-warning" >
                <th>S.NO</th>
                <th>Username</th>
                <th>Registration Date</th>
                <th>Status</th>
               
             </tr>
            </thead>
            <tbody>
            {
                userData.map((value,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{value.userName}</td>
                        <td>{value.createdate}</td>
                        <td><Button variant="text" onClick={()=>{updateStatus(value._id)}}>{value.status}</Button></td>
                    </tr>
                ))
            }
            </tbody>
         </table>
        </div>
        </>
     );
}

export default User;