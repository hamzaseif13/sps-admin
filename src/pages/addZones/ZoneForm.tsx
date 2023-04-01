import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import { CustomModal } from "../../components/CustomModal";
import SelectLocation from "./SelectLocation";
import useToggle from "../../hooks/useToggle";
import useAsync from "../../hooks/useAsync";
import {
  ZoneLocation,
  ZoneRegisterRequest,
  createZone,
} from "../../features/zone/api";
import { isBefore } from "../addOfficer";
import { Alert } from "@mui/material";

function ZoneForm() {
  const [showModal, toggleShowModal] = useToggle(false);
  const [zoneLocation, setZoneLocation] = useState<ZoneLocation>();
  const [error, setError] = useState<string>();
  const {
    execute,
    status,
    error: fetchError,
    value,
  } = useAsync<ZoneRegisterRequest>(createZone, false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data: any) => {
    if (!isBefore(data.startsAt, data.endsAt)) {
      setError("The start at time must be before the end at time");
    } else if (zoneLocation === undefined) {
      setError("Please Select Location");
    } else {
      execute({
        ...data,
        startsAt: data.startsAt + ":00",
        endsAt: data.endsAt + ":00",
        lat: zoneLocation.latLng.lat,
        lng: zoneLocation.latLng.lng,
        address: zoneLocation.address,
        tag: data.tag.toUpperCase(),
      });
    }
  };
  const closeModal = () => {
    toggleShowModal();
  };
  return (
    <div className="rounded-lg  shadow-2xl p-4 max-w-[800px] m-auto">
      <form onSubmit={handleSubmit(submit)} action="">
        <div className="flex gap-2">
          <div className="w-1/2">
            <label htmlFor="zoneTitle" className="input-label">
              Zone Title
            </label>
            <input
              placeholder="City Mall South Gate"
              type="text"
              id="zoneTitle"
              className="input-feild "
              {...register("title", { required: true })}
            />
            {errors.zoneTitle && (
              <span className="error-span ">This Field Is Required</span>
            )}
          </div>
          <div className="w-1/2">
            <label htmlFor="zoneTitle" className="input-label">
              Zone Tag
            </label>
            <input
              placeholder="TC-101"
              type="text"
              id="zoneTag"
              className="input-feild "
              {...register("tag", { required: true })}
            />
            {errors.zoneTitle && (
              <span className="error-span ">This Field Is Required</span>
            )}
          </div>
        </div>
        <div className="flex my-2 gap-2">
          <div className="w-1/2">
            <label htmlFor="spacesCount" className="input-label ">
              Number Of Spaces{" "}
            </label>
            <div className=" flex items-center rounded">
              <input
                defaultValue={5}
                type="number"
                id="spacesCount"
                className="input-feild "
                {...register("numberOfSpaces", {
                  required: true,
                  min: 4,
                  max: 15,
                })}
              />
            </div>
            {errors.spacesCount && (
              <span className="error-span ">
                Enter a Valid Value Between 4 and 15
              </span>
            )}
          </div>
          <div className="w-1/2">
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
              <span className="error-span ">Fee cant be negative</span>
            )}
          </div>
        </div>
        <div className="mb-3 flex w-full gap-2">
          <div className="w-1/2">
            <label className="input-label">start at</label>
            <input
              type="time"
              className="input-feild"
              {...register("startsAt", { required: true })}
              defaultValue={"08:00"}
            />
          </div>
          <div className="w-1/2">
            <label className="input-label">ends at</label>
            <input
              type="time"
              className="input-feild"
              {...register("endsAt", { required: true })}
              defaultValue={"18:00"}
            />
          </div>
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
          <CustomModal
            title="Select Zone Location"
            open={showModal}
            onClose={closeModal}>
            <SelectLocation
              setZoneLocation={setZoneLocation}
              zoneLocation={zoneLocation}
            />
          </CustomModal>
        </div>
        {error && <span className="error-span ">{error}</span>}
        {status === "success" && (
          <Alert severity="success">Created Successfully</Alert>
        )}
        {status === "error" && fetchError?.response?.status === 400 && (
          <Alert severity="error">Tag Already Exists</Alert>
        )}
        {status === "error" && fetchError?.response?.status! >= 500 && (
          <Alert severity="error">
            Something Went Wrong Please Try Again Later
          </Alert>
        )}
        <div className=" flex justify-end">
          <button className="submit-btn " type="submit">
            {status === "pending" ? "Loading ..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ZoneForm;
