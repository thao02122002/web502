import { UserType } from "../type/user";


// lưu vào localStorage
export const authenticated = (user: UserType, next: () => void) => {
  localStorage.setItem('user', JSON.stringify(user))
}


// kiểm tra xem có tồn ại cái user trong localStorage hay k nếu có thì lấy ra 
export const isAuthenicate = () => {
 if(!localStorage.getItem('user')) return;
 return JSON.parse(localStorage.getItem('user') as string)
}