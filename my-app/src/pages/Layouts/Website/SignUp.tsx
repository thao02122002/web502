import React from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import {useNavigate} from "react-router-dom"
import { signup } from '../../../api/user'

type FormInputs = {
  name: string,
  email: string,
  password: string
}



const SignUp = () => {

  const { register, handleSubmit, formState: { errors }} = useForm<FormInputs>();
// chuyển trang
const navigate = useNavigate();
const onSubmit: SubmitHandler<FormInputs> = dataFormInput => {
 signup(dataFormInput);


  navigate("/signin");
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register('name')} placeholder='Nhập tên '/>
      <input type='email' {...register('email')} placeholder='Nhập email ' />
      <input type='password' {...register('password')} placeholder='Nhập pass' />
      <button>Đăng ký</button>
    </form>
  )
}

export default SignUp