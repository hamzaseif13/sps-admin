import Add from "@mui/icons-material/Add";
import AddIcon from "@mui/icons-material/Add";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import { CustomModal } from "../../components/CustomModal";
import SelectZones from "./SelectZones";
import { ZoneChip } from "./ZoneChip";

export interface Schedule {
  startsAt: string;
  endsAt: string;
  daysOfWeek: string[];
}

function AddOfficer() {
  const [zonesModal, setZonesModal] = useState(false);
  const [zones, setZones] = useState<string[]>([]);
  const generatePassword = () => {};
  return (
    <section className="px-2 max-w-[800px] m-auto mt-10">
      <h1 className="text-3xl text-center title">Register New Officer</h1>
      <form action="" className="mt-8 rounded shadow-lg p-4">
        <h1 className="text-2xl font-bold">Officers Details</h1>
        <div className="my-3 ">
          <label htmlFor="first-name" className="input-label">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="input-feild"
            placeholder="Hamza"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" className="input-label">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="input-feild"
            placeholder="Mohammad"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input-feild"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="input-label">
            Phone Number
          </label>
          <input
            type="text"
            pattern="(07[7-9])[0-9]{7}$"
            id="phone"
            className="input-feild"
            placeholder="077xxxxxxx"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <div className="flex gap-1">
            <input
              type="password"
              id="password"
              minLength={9}
              className="input-feild"
              placeholder="password"
              required
            />
            <button
              type="button"
              onClick={generatePassword}
              className="btn bg-gray-700 text-white">
              Generete
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">Schedule</h1>
        <div className="mb-3 flex w-full gap-2">
          <div className="w-1/2">
            <label className="input-label">start at</label>
            <input type="time" className="input-feild" />
          </div>
          <div className="w-1/2">
            <label className="input-label">ends at</label>
            <input type="time" className="input-feild" />
          </div>
        </div>

        <div className="mb-3">
          <label className="input-label">Days of Week</label>
          <input type="time" className="input-feild" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Zones</h1>
        <div className="mb-3">
          <label className="input-label">Assigned Zones</label>

          
          <div className="flex gap-2 my-2 flex-wrap">
          <button
            type="button"
            onClick={() => setZonesModal(true)}
            className="input-feild max-w-[7rem]">
            <Add />
          </button>
            {zones.map((zone) => (
              <ZoneChip zone={zone} setZones={setZones} />
            ))}
          
          </div>
          <CustomModal
            open={zonesModal}
            onClose={() => setZonesModal(false)}
            title="Select Zone">
            <SelectZones zones={zones} setZones={setZones}/>
          </CustomModal>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="submit-btn ">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddOfficer;
