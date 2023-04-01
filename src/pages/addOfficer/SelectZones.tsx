import React, { useState } from "react";
import useAsync from "../../hooks/useAsync";
import { ZoneInfo, getAllZones } from "../../features/zone/api";
import { LinearProgress } from "@mui/material";

interface Props {
  setZones:  React.Dispatch<React.SetStateAction<ZoneInfo[]>>;
  zones: ZoneInfo[];
}
 const SelectZones: React.FC<Props> = ({ setZones, zones }) => {
  const {value,status,error,execute} = useAsync(getAllZones,true)
  const [fetchedZones,setFetchedZones ]=useState( ["TC-101", "TC-102", "TC-103", "TC-104", "TC-105", "TC-106"]);
  const [currentZones,setCurrentZones] = useState<ZoneInfo []>([])
 /*  const toggle = (zone:string) => {
    if (zones.includes(zone)) {
      setZones((prevZones:string[])=>{
          return prevZones.filter((z)=>z!==zone)
      })
    } else {
      setZones((prevZones:string[])=>{
          return [...prevZones,zone]
      })
    }
  }; */

  /* const isSelected = (zone:string) => {
    return zones.includes(zone);
  }; */
  const filterZones = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    if (value === "") {
      setFetchedZones(["TC-101", "TC-102", "TC-103", "TC-104", "TC-105", "TC-106"]);
    } else {
      setFetchedZones((prevZones:string[])=>{
          return prevZones.filter((zone)=>zone.includes(value))
      }
      );
    }
  };
 
  return (
    <div >
      <input type="text" className="input-feild p-4" placeholder="Search for Zone" onChange={filterZones}/>
      <div className="flex gap-2 flex-wrap my-2 ">
        {fetchedZones.map((zone) => (
          <div className={`chip rounded-lg hover:cursor-pointer hover:bg-blue-400 ${isSelected(zone)? "bg-blue-500 text-white":""}`} onClick={()=>toggle(zone)} key={zone}>
            <h1 className="font-extrabold">{zone}</h1>
            <p>Al-Yarmouk St. 6, Amman, Jordan</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectZones;
