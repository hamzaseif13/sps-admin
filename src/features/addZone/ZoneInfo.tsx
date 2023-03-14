import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { decreaseStep, selectZoneLocation, setStep } from './addZoneSlice';
import {PencilSquareIcon} from '@heroicons/react/20/solid'
function ZoneInfo({ setStepComplete }: any) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const zoneLocation = useSelector(selectZoneLocation)
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch<AppDispatch>();
  const goBack = () => {
    dispatch(decreaseStep());
  }
  const submit = (data: any) => {
    setLoading(true)
    setTimeout(()=>setLoading(false),3000)
    setStepComplete(true)
  }
  useEffect(()=>{setStepComplete(false)},[])
  return (
    <div className='rounded  shadow-2xl p-4 max-w-[800px] m-auto'>
    <form onSubmit={handleSubmit(submit)}  action="">
      <h1 className='text-center text-2xl title'>Enter Zone's Info</h1>
      <div className='my-2'>
        <label htmlFor="zoneTitle" className='input-label' >Zone Title</label>
        <input placeholder='City Mall South Gate' type="text" id='zoneTitle' className='input-feild '
          {...register("zoneTitle", { required: true })} />
        {errors.zoneTitle && <span className='error-span ' >This Field Is Required</span>}
      </div>

      <div className='my-2'>
        <label htmlFor="spacesCount" className='input-label '>Number Of Spaces  </label>
        <div className=' flex items-center rounded'>
        <input defaultValue={5} type="number" id='spacesCount' className='input-feild '
          {...register("spacesCount", { required: true, min: 4, max: 15 })} />
          </div>
        {errors.spacesCount && <span className='error-span ' >Enter a Valid Value Between 4 and 15</span>}
      </div>

      <div className='my-2'>
        <label htmlFor="address" className='input-label' >Zone Address</label>
        <div className='flex items-center  rounded '>
        <input value={zoneLocation?.address} readOnly type="text" id='adderss' className=' input-feild'
          {...register("address", { required: true })} />
          <PencilSquareIcon onClick={()=>dispatch(setStep(1))} className='w-10 hover:opacity-50 hover:cursor-pointer'/>
          </div>
      </div>
      
      <div>
        <button className='btn bg-slate-600 mr-2 text-white'onClick={goBack}>Previous</button>
        <button className='submit-btn 'type="submit">
          {loading ? 'Loading ...' :'Save'}
        </button>
      </div>
    </form>
    </div>
  )
}

export default ZoneInfo