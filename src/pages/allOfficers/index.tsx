import React from "react";
import { Link } from "react-router-dom";
import { getAllOfficers } from "../../features/officers/api";
import useAsync from "../../hooks/useAsync";
import OfficerCard from "./OfficerCard";

const AllOfficers = () => {
  const { error, status, value, execute } = useAsync(getAllOfficers, true);

  return (
    <main className="px-2  mt-[2rem]">
      <h1 className=" font-bold title text-center mb-4">Officers</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm  text-gray-500 dark:text-gray-400 text-center">
          <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Start Time
              </th>
              <th scope="col" className="px-6 py-3">
                End Time
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {status === "success" &&
              value?.data.map((officer: any) => (
                <OfficerCard officer={officer} refresh={execute} key={officer.id}/>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AllOfficers;
