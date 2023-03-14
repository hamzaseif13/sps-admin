import React, { useEffect, useRef, useState } from 'react'
import { fabric } from 'fabric'
import Controls from './Controls';
function SpacesInfo({setStepComplete}:any) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [canvas, setCanvas] = useState<fabric.Canvas>()
  useEffect(() => {
    setStepComplete(false)
    const canvas=new fabric.Canvas(canvasRef.current,{
      height: 500,
      width: 1000,
      backgroundColor:"white"
    })
    setCanvas(canvas);
  }, [])

  return (
    <div className=''>
      <Controls canvas={canvas as fabric.Canvas} />
      <canvas  ref={canvasRef} className='border shadow-md  m-auto '  />
    </div>
    
  )
}

export default SpacesInfo

