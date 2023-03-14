import { MapPinIcon, UserIcon } from '@heroicons/react/20/solid'
import React, { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'


function Sidebar({children}:{children:ReactNode}) {
  return (
    <>
      <aside  className="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform  translate-x-0" >
        <div className="h-full px-3 py-4 overflow-y-auto  bg-gray-800">
          <ul className="space-y-2">
            <li>
              <NavLink to='' className={({isActive})=>`${isActive && 'bg-gray-700'} flex items-center p-2 text-base font-normal  rounded-lg  text-white  hover:bg-gray-700`}>
                <svg aria-hidden="true" className="w-6 h-6  transition duration-75 text-gray-400  group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
              </NavLink>
            </li>
           
            <Dropdown title='Zones' icon={<MapPinIcon />}>
               <li>
                <NavLink to='/zones' end  className={({isActive})=> `flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700 ${isActive && 'bg-gray-700'}`}>
                  All zones
                </NavLink>
              </li>
              <li>
                <NavLink to='zones/add' end className={({isActive})=> `flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700 ${isActive && 'bg-gray-700'}`}>
                  Add Zone
                </NavLink>
              </li>
            </Dropdown>
            <Dropdown title='Officers' icon={<UserIcon />}>
               <li>
                <NavLink to='/officers'end className={({isActive})=> `flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700 ${isActive && 'bg-gray-700'}`}>
                  All Officers
                </NavLink>
              </li>
              <li>
                <NavLink to='/officers/add' end className={({isActive})=> `flex items-center w-full p-2 text-base font-normal transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700 ${isActive && 'bg-gray-700'}`}>
                  Add Officer
                </NavLink>
              </li>
            </Dropdown>
          </ul>
        </div>
      </aside>
      <main className='ml-64'>
        {children}
      </main>
    </>
  )
}

export default Sidebar