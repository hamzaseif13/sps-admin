import React, { useState } from "react";

interface Props {
  setZones: React.Dispatch<React.SetStateAction<string[]>>;
  zones: string[];
}
 const SelectZones: React.FC<Props> = ({ setZones, zones }) => {
  const [fetchedZones,setFetchedZones ]=useState( ["TC-101", "TC-102", "TC-103", "TC-104", "TC-105", "TC-106"]);
  const toggle = (zone:string) => {
    if (zones.includes(zone)) {
      setZones((prevZones:string[])=>{
          return prevZones.filter((z)=>z!==zone)
      })
    } else {
      setZones((prevZones:string[])=>{
          return [...prevZones,zone]
      })
    }
  };
  const isSelected = (zone:string) => {
    return zones.includes(zone);
  };
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
      <div className="flex gap-2 flex-wrap my-2 min-h-[300px]">
        {fetchedZones.map((zone) => (
          <div className={`chip rounded-lg h-[4rem] ${isSelected(zone)? "bg-blue-500 text-white":""}`} onClick={()=>toggle(zone)} key={zone}>
            <h1 className="font-extrabold">{zone}</h1>
            <p>Al-Yarmouk St. 6, Amman, Jordan</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectZones;
