import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import Login from './Pages/Login';
export default function ProtectedRoute({element}:any) {
    // let data =localStorage.getItem('data')
    let data= JSON.parse(localStorage.getItem("data")||"{}")
    console.log(data);
    
const navigate=useNavigate()
    if(!data){
    //    localStorage.removeItem('data')
    // window.location.reload()
 navigate("/")

    }
    useEffect(() => {
      if(!data){
       navigate("/")

      }
      
    }, [])
    if(!data){
       return <Login/>
 
       }
       
    
    
  return element
}
