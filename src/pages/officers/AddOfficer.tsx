import { PlusIcon } from '@heroicons/react/20/solid'
import { Modal } from '@mui/material'
import React, { useState } from 'react'
import SelectSchedule from '../../features/officer/SelectSchedule';
import SelectZones from '../../features/officer/SelectZones';

function AddOfficer() {
  const [scheduleModal,setScheduleModal] = useState(false);
  const [zonesModal,setZonesModal] = useState(false);
  const generatePassword=()=>{

  }
  return (
    <section className='px-2 max-w-[800px] m-auto mt-10'>
      <h1 className='text-3xl text-center title'>Register New Officer</h1>
      <form action="" className='mt-8 rounded shadow-lg p-4'>
        <div className="my-3 ">
          <label htmlFor="first-name" className="input-label">First Name</label>
          <input type="text" id="first-name" className="input-feild" placeholder="Hamza" required />
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" className="input-label">Last Name</label>
          <input type="text" id="last-name" className="input-feild" placeholder="Mohammad" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="input-label">Email</label>
          <input type="email" id="email" className="input-feild" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="input-label">Phone Number</label>
          <input type="text" pattern='(07[7-9])[0-9]{7}$' id="phone" className="input-feild" placeholder="077xxxxxxx" required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="input-label">Password</label>
          <div className='flex gap-1'>
          <input type="password" id="password"  minLength={9} className="input-feild" placeholder="password" required />
          <button type='button' onClick={generatePassword} className='btn bg-gray-700 text-white'>Generete</button>
          </div>
        </div>
        <div className="mb-3">
          <label  className="input-label">Schedule</label>
            <button  onClick={()=>setScheduleModal(true)} type='button' className='borde-gray-500 border p-2 rounded-lg hover:bg-white bg-gray-50'><PlusIcon className=' w-5'/>
            </button>
            <Modal open={scheduleModal} onClose={()=>setScheduleModal(false)}>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>
                <SelectSchedule/>
              </div>
            </Modal>
        </div>
        <div className="mb-3">
          <label className="input-label">Assigned Zones</label>
            <button onClick={()=>setZonesModal(true)} type='button' className='borde-gray-500 border p-2 rounded-lg hover:bg-white bg-gray-50'><PlusIcon className=' w-5'/>
            </button>
            <Modal open={zonesModal} onClose={()=>setZonesModal(false)}>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>
                <SelectZones/>
              </div>
            </Modal>
        </div>
        <button type='submit' className='submit-btn '>Save</button>
      </form>
    </section>
  )
}

export default AddOfficer