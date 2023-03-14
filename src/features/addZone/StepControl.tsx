import { Tooltip } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { decreaseStep, increaseStep, selectCurrentStep, selectTotalSteps } from './addZoneSlice';
interface Props{
  stepComplete:boolean
  step:number
  totalSteps:number
}
function StepControl({stepComplete, step, totalSteps}:Props) {
    const dispatch = useDispatch<AppDispatch>();
  
    const nextStep = ()=>{  
      if(stepComplete)
        dispatch(increaseStep())
    }
    const prevStep=()=>{
        dispatch(decreaseStep())
    }
  return (
    <div className='my-2'>
        <button onClick={prevStep}disabled={step===1} className={`btn  mr-2  bg-slate-600 text-white ${step===1 && 'hover:cursor-not-allowed'}`}>Previous</button>
        <Tooltip title={`${stepComplete ? 'next':'Enter all required info to Continue'} `}>
          <button onClick={nextStep}  className={`btn   bg-slate-600 text-white ${!stepComplete && 'hover:cursor-not-allowed'}`}>Next</button>
        </Tooltip>
    </div>
  )
}

export default StepControl