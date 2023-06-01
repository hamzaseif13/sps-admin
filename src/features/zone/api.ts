import axios from "axios";


export interface ZoneInfo {
    fee: number
    id: number
    title:string
    tag:string
    address:string
    lng:number
    lat:number
    numberOfSpaces:number
    availableSpaces:number
    startsAt:string
    endsAt:string
}
export type ZoneRegisterRequest = Omit<ZoneInfo,"id"|"availableSpaces">
export interface ZoneLocation{
    latLng:{lat:number,lng:number}
    address:string
}
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "/api/v1/zone",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
export const getAllZones= ()=>{
    return axiosInstance.get("")
}
export const createZone = (zoneRegisterRequest:ZoneRegisterRequest)=>{
    return axiosInstance.post("",zoneRegisterRequest)
}