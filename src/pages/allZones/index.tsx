import React from "react";
import { Link } from "react-router-dom";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import useToggle from "../../hooks/useToggle";
import { CustomModal } from "../../components/CustomModal";
import QRGenerator from "./QRGenerator";
import useAsync from "../../hooks/useAsync";
import { getAllZones } from "../../features/zone/api";
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import ZoneCard from "./ZoneCard";
import { Alert } from "@mui/material";
const AllZones = () => {
  const {status,value,error} = useAsync(getAllZones,true)
  const [qrModal, toggleQR] = useToggle(false);
  if(value){1
    console.log(value)
  }
  return (
    <main className="px-2  mt-[2rem]">
      <h1 className=" font-bold title text-center mb-4 ">Zones</h1>
      <section className="flex gap-2 justify-center flex-wrap">
        { status==="success" && value?.data?.map((zone:any) => (
          <ZoneCard zoneInfo={zone}/>
      ))
      }
      </section>
      {
        status==='pending' && <LinearProgress />
      }
      {
        status==='error' &&  <Alert severity="error">Something Went Wrong Please Try Again Later.</Alert>
      }
    </main>
  );
};

export default AllZones;
