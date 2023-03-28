import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  resetZoneLocation,
  selectZoneLocation,
  ZoneLocation,
} from "../../features/addZone/addZoneSlice";
import AddIcon from "@mui/icons-material/Add";
import { CustomModal } from "../../components/CustomModal";
import SelectLocation from "./SelectLocation";
import useToggle from "../../hooks/useToggle";




function ZoneForm() {
  const [showModal, toggleShowModal] = useToggle(false);
  const [zoneLocation,setZoneLocation] = useState<ZoneLocation>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const submit = (data: any) => {
    
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
   
  };
  const closeModal = () => {
   toggleShowModal()
  };
  return (
    <div className="rounded-lg  shadow-2xl p-4 max-w-[800px] m-auto">
      <form onSubmit={handleSubmit(submit)} action="">
        <div className="my-2">
          <label htmlFor="zoneTitle" className="input-label">
            Zone Title
          </label>
          <input
            placeholder="City Mall South Gate"
            type="text"
            id="zoneTitle"
            className="input-feild "
            {...register("zoneTitle", { required: true })}
          />
          {errors.zoneTitle && (
            <span className="error-span ">This Field Is Required</span>
          )}
        </div>

        <div className="my-2">
          <label htmlFor="spacesCount" className="input-label ">
            Number Of Spaces{" "}
          </label>
          <div className=" flex items-center rounded">
            <input
              defaultValue={5}
              type="number"
              id="spacesCount"
              className="input-feild "
              {...register("spacesCount", { required: true, min: 4, max: 15 })}
            />
          </div>
          {errors.spacesCount && (
            <span className="error-span ">
              Enter a Valid Value Between 4 and 15
            </span>
          )}
        </div>
        <div className="my-2">
          <label htmlFor="spacesCount" className="input-label ">
            Fee{" "}
          </label>
          <div className=" flex items-center rounded">
            <input
              defaultValue={1}
              type="number"
              id="spacesCount"
              className="input-feild "
              {...register("fee", { required: true, min: 0.5, max: 3 })}
            />
          </div>
          {errors.fee && (
            <span className="error-span ">
              Fee cant be negative  
            </span>
          )}
        </div>
        <div className="my-2">
          <label htmlFor="address" className="input-label">
            Zone Address
          </label>
          <button
            onClick={toggleShowModal}
            type="button"
            className="borde-gray-500 border flex gap-2 items-center p-2 rounded-lg hover:bg-white bg-gray-50">
            {zoneLocation?.address ? zoneLocation?.address : "Select Location"}
            <AddIcon className=" w-5" />
          </button>
          <CustomModal title="Select Zone Location" 
            open={showModal}
            onClose={closeModal}>
            <SelectLocation setZoneLocation={setZoneLocation} zoneLocation={zoneLocation}/>
          </CustomModal>
        </div>
        <div className=" flex justify-end">
          <button className="submit-btn " type="submit">
            {loading ? "Loading ..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ZoneForm;
