import React from "react";
import { Link } from "react-router-dom";

const AllOfficers = () => {
    const officers = ["John", "Doe", "Jane", "Doe", "Jo Doe", "Jane Doe"]
  return (
    <main className="px-2  mt-[2rem]">
      <h1 className=" font-bold title text-center mb-4">Officers</h1>
      <section className="flex gap-2 justify-center">
            <div className="p-4 rounded-lg shadow">
                <h1 className="text-2xl font-medium">Mohammaded Seif</h1>
                <p className="text-gray-500">hamza@hamza.com</p>
                <div className="flex gap-2 my-2 flex-wrap max-w-[300px]">
                    <span className='border p-1 rounded-lg'>Sunday</span>
                    <span className='border p-1 rounded-lg'>Wednsadt</span>
                    <span className='border p-1 rounded-lg'>Tuesady</span>
                    <span className='border p-1 rounded-lg'>Tuesady</span>
                    <span className='border p-1 rounded-lg'>Tuesady</span>
                </div>
                <h2>07:00 - 18:00</h2>
                <Link to="/officers/2" className="submit-btn block my-2">
                Details
                </Link>
            </div>
            <div className="p-4 rounded-lg shadow">
                <h1 className="text-2xl font-medium">Mohammaded Seif</h1>
                <p className="text-gray-500">hamza@hamza.com</p>
                <div className="flex gap-2 my-2 flex-wrap max-w-[300px]">
                    <span className='border p-1 rounded-lg'>Sunday</span>
                    <span className='border p-1 rounded-lg'>Wednsadt</span>
                    <span className='border p-1 rounded-lg'>Tuesady</span>
                    <span className='border p-1 rounded-lg'>Tuesady</span>
                    <span className='border p-1 rounded-lg'>Tuesady</span>
                </div>
                <h2>07:00 - 18:00</h2>
                <Link to="/officers/2" className="submit-btn block my-2">
                Details
                </Link>
            </div>
            <div className="p-4 rounded-lg shadow">
                <h1 className="text-2xl font-medium">Mohammaded Seif</h1>
                <p className="text-gray-500">hamza@hamza.com</p>
                <div className="flex gap-2 my-2 flex-wrap max-w-[300px]">
                    <span className='border p-1 rounded-lg'>Sunday</span>
                    <span className='border p-1 rounded-lg'>Wednsadt</span>
                    <span className='border p-1 rounded-lg'>Tuesady</span>
                    <span className='border p-1 rounded-lg'>Tuesady</span>
                    <span className='border p-1 rounded-lg'>Tuesady</span>
                </div>
                <h2>07:00 - 18:00</h2>
                <Link to="/officers/2" className="submit-btn block my-2">
                Details
                </Link>
            </div>
           
      </section>
    </main>
  );
};

export default AllOfficers;
