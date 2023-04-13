import React, { useState } from 'react'
import { useDispatch, } from 'react-redux'
import {useNavigate} from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { ragister } from '../redux/authSlice'
import axios from 'axios'
import { ragister } from './redux/slice'
import { AppDispatch } from './redux/store'
import { useForm } from 'react-hook-form';
import { error } from 'console'
export default function Ragister() {
    let navigate= useNavigate()
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [cPassword,setCpassword]=useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    let obj={
        firstName,
        lastName,
        email,
        password
    }
const dispatch=useDispatch<AppDispatch>()
// const handleSubmit=(e:any)=>{
// // dispatch(ragister(obj))
// try {
//     dispatch(ragister(obj))
//     navigate("/")
// } catch (error) {
//     console.log(error);
    
// }

// e.preventDefault()
// }
  return (
    <div>
       <div className="row">
        <div className="col-sm-6 offset-sm-3">
            <div className="card">
                <div className="card-header bg-info">Ragister Form</div>
                <div className="card-body">
                <form action="" onSubmit={handleSubmit((data)=>{dispatch(ragister(obj)); navigate("/")})}>

<label htmlFor="">FirstName</label>
<input type="text" className='form-control' {...register('firstName', { required: true })} onChange={(e)=>setFirstName(e.target.value)}/> 
{errors.firstName && <p style={{color:"red"}}>firstName is required.</p>}
<br />
<label htmlFor="">LastName</label>
<input type="text" className='form-control' {...register('lastName', { required: true })} onChange={(e)=>setLastName(e.target.value)} />
{errors.lastName && <p style={{color:"red"}}>lastName is required.</p>}
 <br />
<label htmlFor="">Email</label>
<input type="text" className='form-control' {...register('email', { required: true })} onChange={(e)=>setEmail(e.target.value)}/> 
{errors.email && <p style={{color:"red"}}>email is required.</p>}
<br />
<label htmlFor="">Password</label>
<input type="text" className='form-control' {...register('password', { required: true })} onChange={(e)=>setPassword(e.target.value)}/>
{errors.password && <p style={{color:"red"}}>password is required.</p>}
 <br />
<label htmlFor="">Conform Password</label>
<input type="text" className='form-control' {...register('cPassword', { required: true })} onChange={(e)=>setCpassword(e.target.value)}/>
{errors.cPassword && <p style={{color:"red"}}>conform Your password</p>}
 
<br />
<button className='btn btn-outline-primary'>Submit</button>
</form>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}
