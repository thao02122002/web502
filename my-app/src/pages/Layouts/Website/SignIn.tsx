import React from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import {useNavigate} from "react-router-dom"
import { signin, signup } from '../../../api/user'
import {authenticated} from "../../../utils/localStorage"
type FormInputs = {
  email: string,
  password: string
}


const SignIn = () => {
  const { register, handleSubmit, formState:{errors}}=useForm<FormInputs>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormInputs> = async (dataForm) => {
   const {data: user} = await signin(dataForm);
   console.log(user);

   authenticated(user, () => {
    navigate("/");
   })
    
  }
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <input type='email' {...register('email')} placeholder='Nhập email ' />
      <input type='password' {...register('password')} placeholder='Nhập pass' />
      <button>Submit</button>
    </form>
  )
}

export default SignIn

