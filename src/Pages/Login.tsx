import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { login } from './redux/slice'
import { useForm } from 'react-hook-form';
import { AppDispatch } from './redux/store'
export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    let navigate= useNavigate()
    const dispatch =useDispatch<AppDispatch>()
    const [userLogin,setUserLogin]=useState<object>({})
    // const [password,setpassword]=useState('')
    // const handleSubmit=(e:any)=>{
    //     e.preventDefault()
    //     console.log(userLogin);
        

    //     }
  return (
    <div>
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-header">Login Forms</div>
                    <div className="card-body">
                    <form action="" onSubmit={handleSubmit((data)=>{dispatch(login(data))})}>

<label htmlFor="">Email</label>
<input type="text" className='form-control' {...register('email', { required: true })} onChange={(e)=>setUserLogin({...userLogin,email:e.target.value})}/> <br /> 
{errors.email && <p style={{color:"red"}}>email is required.</p>}
<br />
<label htmlFor="">Password</label>
<input type="text" className='form-control' {...register('password', { required: true })} onChange={(e)=>setUserLogin({...userLogin,password:e.target.value})}/> <br />
{errors.password && <p style={{color:"red"}}>password is required.</p>}

<button className='btn btn-primary'>Login</button>
<button type='button' className='btn btn-outline-primary' onClick={()=>navigate("/ragisterUser")}>
    Ragister
</button>
</form>
                    </div>
                </div>
            </div>
          </div>
    </div>
  )
}
