import { useState } from "react";
import Left from "./Left";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";

function Querydata() {

    const[query,setQuery]=useState([])

    fetch("/api/querydata").then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data);
        setQuery(data)
    })

    return ( 
        <>
        
        <div className="w-4/5 h-screen flex mx-auto flex-col">
         <Left/>
         <div className="w-3/5">
        
         </div>

         <h1 className="text-2xl text-center text-red-800">Product Management</h1>
          <table className="table table-hover table-striped mt-3">

            <thead>
            <tr className="border-2 table-warning" >
                <th>S.NO</th>
                <th>E-mail</th>
                <th>Query</th>
                <th>Status</th>
                <th>Response</th>
                <th>Delete</th>
             </tr>
            </thead>
            <tbody>
               {
                query.map((value,index)=>(
                    <tr>
                        <td>{index+1}</td>
                    <td>{value.Email}</td>
                    <td>{value.Query}</td>
                     <td>{value.status}</td>
                     <td><Link to={`/queryreply/${value._id}`}><Button variant="text" endIcon={<SendIcon/>} color="success">Replay</Button></Link></td>
                     <td><Button>Delete</Button></td>
                </tr>
                ))
               }
            </tbody>
         </table>
        </div>

        </>
     );
}

export default Querydata;