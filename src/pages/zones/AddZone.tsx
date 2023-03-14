import { Wrapper } from '@googlemaps/react-wrapper'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentStep } from '../../features/addZone/addZoneSlice'
import SelectLocation from '../../features/addZone/SelectLocation'
import SpacesInfo from '../../features/addZone/SpacesInfo'
import Step from '../../features/addZone/Step'

function AddZone() {
  const currentStep = useSelector(selectCurrentStep);
  const getElement =()=>{
    switch(currentStep){
      case 1:return <Step stepType='zoneLocation' stepTitle="Select The Zone Location" step={1}  />
      case 2:return <Step stepType='zoneInfo' stepTitle="Select Spaces Info"       step={2} />
    }
  }
  return (
    <Wrapper libraries={[ 'places', 'visualization']} apiKey={import.meta.env.VITE_MAPS_API_KEY}>
      <div className='px-2  my-4'>
          <h1 className='text-3xl title'>Add New Zone</h1>
          {
            getElement()
          }
      </div>
    </Wrapper>
  )
}

export default AddZone