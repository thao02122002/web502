import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenicate} from "../../../utils/localStorage"

type PrivateRouterProps = {
  children: JSX.Element   // gọi cái thằng con ở trong 1 component thì dùng JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
  // const isAuth = true // true thì sẽ vào dashboard còn false sẽ vào /login
  const {user: {role}} = isAuthenicate();
  if(!role){
    return <Navigate to='/signin' />
  }
  return props.children
}

export default PrivateRouter