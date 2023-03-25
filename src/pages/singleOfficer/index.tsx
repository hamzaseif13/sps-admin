import Add from "@mui/icons-material/Add";
import React from "react";

const SingleOfficer = () => {
  return (
    <main className="px-2  mt-[2rem]">
      <h1 className=" font-bold title text-center mb-4">Mohammd Seif</h1>
      <div className=" shadow-lg rounded-lg max-w-[800px] m-auto p-4">
        <div className="my-3 ">
          <label htmlFor="first-name" className="input-label">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="input-feild"
            value="Hamza"
            required
            readOnly
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
            value="Mohammad"
            required
            readOnly
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
            value="name@flowbite.com"
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="input-label">
            Phone Number
          </label>
          <input className="input-feild" value={"192391238"} readOnly />
        </div>

        {/* editable data below  */}
        <form>
          <h1 className="text-2xl font-medium mb-2">Schedule</h1>
          <div className="mb-3 flex w-full gap-2">
            <div className="w-1/2">
              <label className="input-label">start at</label>
              <input
                type="time"
                className="input-feild"
                value="07:15"
                readOnly
              />
            </div>
            <div className="w-1/2">
              <label className="input-label">ends at</label>
              <input
                type="time"
                className="input-feild"
                readOnly
                value="19:32"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="input-label">Days of Week</label>
            <div className="flex gap-2 my-2 ">
              <span className="border p-1 rounded-lg">Sunday</span>
              <span className="border p-1 rounded-lg">Wednsadt</span>
              <span className="border p-1 rounded-lg">Tuesady</span>
              <span className="border p-1 rounded-lg">Tuesady</span>
              <span className="border p-1 rounded-lg">Tuesady</span>
            </div>
          </div>
          <div className="mb-3">
            <label className="input-label">Zones</label>
            <div className="flex gap-2 my-2 ">
              <a href="/" className="border p-1 rounded-lg">
                TC-101
              </a>
              <span className="border p-1 rounded-lg">TC-101</span>
              <span className="border p-1 rounded-lg">TC-101</span>
              <span className="border p-1 rounded-lg">TC-101</span>
              <span className="border p-1 rounded-lg">TC-101</span>
            </div>
          </div>
          <div className="flex justify-end">
          <button type="button" className="submit-btn">edit</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SingleOfficer;
