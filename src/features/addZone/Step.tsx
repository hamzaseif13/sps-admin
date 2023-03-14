import { CheckCircleIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectTotalSteps } from './addZoneSlice';
import SelectLocation from './SelectLocation';
import SpacesInfo from '../addZone/SpacesInfo';
import StepControl from './StepControl';
import ZoneInfo from './ZoneInfo';


interface Props {
    step: number
    stepTitle: string

    stepType: 'spacesInfo' | 'zoneLocation' | 'zoneInfo'
}


function Step({ step, stepTitle, stepType }: Props) {
    const totalSteps = useSelector(selectTotalSteps);
    const [stepComplete, setStepComplete] = useState(false);
    const getElement = () => {
        switch (stepType) {
            case 'zoneLocation': return <SelectLocation setStepComplete={setStepComplete} />;
            case 'zoneInfo': return <ZoneInfo setStepComplete={setStepComplete}/>
        }
    }
    return (
        <div>
            <div className='flex items-center'>
                <h2 className='my-2'>Step {step}/{totalSteps} : {stepTitle}</h2>
                {
                 stepComplete&&   <span><CheckCircleIcon className='w-6 text-green-500 inline' /></span>
                }
            </div>
            {getElement()}
            {
                step != totalSteps && <StepControl stepComplete={stepComplete} step={step} totalSteps={totalSteps} />
            }

        </div>
    )
}

export default Step