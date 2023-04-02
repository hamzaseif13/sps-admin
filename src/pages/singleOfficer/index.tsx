import Add from "@mui/icons-material/Add";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getOfficerById } from "../../features/officers/api";
import useAsync from "../../hooks/useAsync";
import Alert from "@mui/material/Alert";
import useToggle from "../../hooks/useToggle";
import { CustomModal } from "../../components/CustomModal";
import UpdateForm from "./UpdateForm";

const SingleOfficer = () => {
  const { id } = useParams();
  const { value, status, error } = useAsync(getOfficerById, true, id);
  const [edit,toggleEdit] = useToggle()
  if (status === "pending") {
    return <h1>Loading...</h1>;
  }
  if (status === "error") {
    let mes: string;
    if (error?.response?.status! < 500) {
      mes = "Officer Not Found, Bad Request";
    } else {
      mes = "Something Went Wrong";
    }
    return <Alert severity="error">{mes}</Alert>;
  }

  return (
    <main className="px-2  mt-[2rem]">
        <>
          <h1 className=" font-bold title text-center mb-4">
            {value?.data?.firstName + " " + value?.data?.lastName}
          </h1>
          
          <div className=" shadow-lg rounded-lg max-w-[800px] m-auto p-4">
            <div className="mb-3">
              <label htmlFor="email" className="input-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input-feild"
                value={value?.data?.email}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="input-label">
                Phone Number
              </label>
              <input className="input-feild" value={value?.data?.phone} readOnly />
            </div> 

            {/* editable data below  */}
             <form>
              <h1 className="text-2xl font-medium mb-2">Schedule</h1>
              <div className="mb-3 flex w-full gap-2">
                <div className="w-1/2">
                  <label className="input-label">start at</label>
                  <input
                    type="time"
                    className={`input-feild`}
                    value={value?.data?.schedule?.startsAt.substring(0, 5)}
                    readOnly
                  />
                </div>
                <div className="w-1/2">
                  <label className="input-label">ends at</label>
                  <input
                    type="time"
                    className="input-feild"
                    readOnly
                    value={value?.data?.schedule?.endsAt.substring(0, 5)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="input-label">Days of Week</label>
                <div className="flex gap-2 my-2 ">
                  {value?.data?.schedule?.daysOfWeek.map((day: any) => (
                    <span className="border p-1 rounded-lg">{day}</span>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label className="input-label">Zones</label>
                <div className="flex gap-2 my-2 ">
                 {value?.data.zones.map((zone:any)=>(
                    <span className="border p-1 rounded-lg">{zone.tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <button onClick={toggleEdit} type="button" className="submit-btn">
                  edit
                </button>
                <CustomModal open={edit} onClose={toggleEdit} title='Update Officer'>
                    <UpdateForm officerId={Number(id)}  days={value?.data?.schedule?.daysOfWeek}/>
                </CustomModal>
              </div>
            </form>
          </div> 
        </>
    </main>
  );
};
export default SingleOfficer;
