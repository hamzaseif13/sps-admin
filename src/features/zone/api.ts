import axios from "axios";


export interface ZoneInfo {
    zoneId: number;
    title:string
    tag:string
    address:string
    lng:number
    ltd:number
    numberOfSpaces:number
    availableSpaces:number
    startsAt:string
    endsAt:string
}


export const getAllZones= ()=>{
    return axios.get<ZoneInfo[]>(`${import.meta.env.VITE_API_URL}/api/v1/zone`,{headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }})
}