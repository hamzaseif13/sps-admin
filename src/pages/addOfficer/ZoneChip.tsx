import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
interface Props{
    setZones:React.Dispatch<React.SetStateAction<string[]>>
    zone:string
}
export const ZoneChip:React.FC<Props> = ({setZones,zone}) => {
    const deleteZone=()=>{
        setZones((prevZones:string[])=>{
            return prevZones.filter((z)=>z!==zone)
        })
    }
  return (
    <div className='chip rounded-lg flex items-center gap-2'>
        <h2 className='font-bold text-lg'>{zone}</h2>
        <button onClick={deleteZone} type="button"className='text-gray-500 hover:text-gray-800'>
            <HighlightOffIcon/>
        </button>
    </div>
  )
}
