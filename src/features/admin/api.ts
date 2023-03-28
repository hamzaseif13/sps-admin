import axios from 'axios'
export interface CreateAdminRequest{
    firstName:string
    lastName:string
    email:string
    password:string
    phone:number
}
export const createAdmin=(req:CreateAdminRequest)=>{
    return axios.post(`${import.meta.env.VITE_API_URL}/api/v1/admin`,req)
}