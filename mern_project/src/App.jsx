import Delete from "./comp/admin/Delete";
import Admin from "./comp/admin/Admin";
import ProductAdd from "./comp/admin/ProductAdd";
import ProductForm from "./comp/admin/ProductForm";
import UpdateForm from "./comp/admin/UpdateForm";
import Footer from "./comp/Footer";
import Login from "./comp/Login";
import Navbar from "./comp/Navbar";
import Product from "./comp/Product";
import Reg from "./comp/Reg";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Querydata from "./comp/admin/Querdata";
import QueryReply from "./comp/admin/QueryReply";
import User from "./comp/admin/User";
import { userContext } from './comp/userContext';
import { useEffect, useState } from "react";
import Cart from "./comp/Cart";




function App() {

 const[loginadmin,setLoginadmin]= useState(localStorage.getItem("admin"))
 const[loginuser,setLoginuser]= useState(localStorage.getItem("user"))
 const[cart,setCart]=useState()
 console.log(cart);

 useEffect(()=>{
  localStorage.setItem("cart",JSON.stringify(cart))
 },[cart])

 

  return ( 
    <>

    <userContext.Provider value={{loginadmin,setLoginadmin,loginuser,setLoginuser,cart,setCart}}>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/reg" element={<Reg/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/productadd" element={<ProductAdd/>}/>
        <Route path="/productform" element={<ProductForm/>}/>
        <Route path="/updateproduct/:id" element={<UpdateForm/>}/>
        <Route path="/deleteproduct/:id" element={<Delete/>}/>
        <Route path="/query" element={<Querydata/>}/>
        <Route path="/queryreply/:id" element={<QueryReply/>}/>
        <Route path="/user" element={<User/>}/>
         <Route path="/cart"  element={<Cart/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>

    </userContext.Provider>
    
    </>
   );
}

export default App;