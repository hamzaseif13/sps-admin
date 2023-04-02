import Add from "@mui/icons-material/Add";
import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CustomModal } from "../../components/CustomModal";
import {
  OfficerUpdateRequest,
  updateOfficer,
} from "../../features/officers/api";
import useAsync from "../../hooks/useAsync";
import useToggle from "../../hooks/useToggle";
import { isBefore } from "../addOfficer";
import SelectDays from "../addOfficer/SelectDays";
import SelectZones from "../addOfficer/SelectZones";
import { ZoneChip } from "../addOfficer/ZoneChip";

interface Props {
  days: string[];
  officerId: number;
}

const UpdateForm: React.FC<Props> = ({ days, officerId }) => {
  const [zonesModal, toggleZonesModal] = useToggle(false);
  const [daysModal, toggleDaysModal] = useToggle(false);
  const [daysOfWeek, setDaysOfWeek] = useState<string[]>(days);
  const [formError, setError] = useState<string>();
  const { value, error, execute, status } = useAsync<OfficerUpdateRequest>(
    updateOfficer,
    false
  );

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();
  const submit = (data: any) => {
    if (!isBefore(data.startsAt, data.endsAt)) {
      setError("The start at time must be before the end at time");
    } else if (daysOfWeek.length === 0) {
      setError("Please Select Zones and Days");
    } else {
      execute({
        id: officerId,
        daysOfWeek: daysOfWeek.map((d) => d.toUpperCase()),
        startsAt: data.startsAt + ":00",
        endsAt: data.endsAt + ":00",
        zoneIds: [],
      });
    }
  };
  if (status === "success") {
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
  return (
    <form
      onSubmit={handleSubmit(submit)}
      action=""
      className="mt-8 rounded shadow-lg p-4">
      <div className="mb-3 flex w-full gap-2">
        <div className="w-1/2">
          <label className="input-label">start at</label>
          <input
            type="time"
            className="input-feild"
            {...register("startsAt", { required: true })}
          />
        </div>
        <div className="w-1/2">
          <label className="input-label">ends at</label>
          <input
            type="time"
            className="input-feild"
            {...register("endsAt", { required: true })}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="input-label">Days of Week</label>
        <div className="flex gap-2 my-2 flex-wrap">
          <button
            type="button"
            onClick={toggleDaysModal}
            className="input-feild max-w-[7rem]">
            <Add />
          </button>
          {daysOfWeek.map((day) => (
            <ZoneChip key={day} zone={day} setZones={setDaysOfWeek} />
          ))}
        </div>
        <CustomModal
          open={daysModal}
          onClose={toggleDaysModal}
          title="Select Zone">
          <SelectDays days={daysOfWeek} setDays={setDaysOfWeek} />
        </CustomModal>
        {errors.daysOfWeek && (
          <span className="error-span ">This Field Is Required</span>
        )}
      </div>
      {/* <h1 className="text-2xl font-medium mb-2">Zones</h1>
    <div className="mb-3">
      <label className="input-label">Assigned Zones</label>
      <div className="flex gap-2 my-2 flex-wrap">
        <button
          type="button"
          onClick={toggleZonesModal}
          className="input-feild max-w-[7rem]">
          <Add />
        </button>
        {zones.map((zone) => (
          <ZoneChip key={zone} zone={zone} setZones={setZones} />
        ))}
      </div>
      <CustomModal
        open={zonesModal}
        onClose={toggleZonesModal}
        title="Select Zone">
        <SelectZones zones={zones} setZones={setZones} />
      </CustomModal>
      {error && <span className="error-span ">{error}</span>}
    </div> */}

      {status === "error" && <Alert severity="error">{error?.message}</Alert>}

      {status === "success" && (
        <Alert severity="success">Updated Successfully</Alert>
      )}
      {formError && <span className="error-span ">{formError}</span>}
      <div className=" flex justify-end mt-2">
        <button className="submit-btn " type="submit">
          {status === "pending" ? "Loading ..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default UpdateForm;
