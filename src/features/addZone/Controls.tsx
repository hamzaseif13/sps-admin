import React, { useEffect, useState } from 'react'
import { fabric } from 'fabric'
import { Menu } from '@mui/material'
import straigtStreet from '../../assets/straigt-street.png'
import curveStreet from '../../assets/curve.png'
import { ArrowDownIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
interface Props {
    canvas: fabric.Canvas
}
function Controls({ canvas }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [isStreet, setIsStreet] = useState(false);
    const [spaces,setSpaces] = useState();
    const [text, setText] = useState('');
    const [spaceCounter, setSpaceCounter] = useState(0);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const addSpace = () => {
        let rect = new fabric.Rect({
            height: 30,
            width: 60,
            fill: "rgba(80, 200, 120,0.8)",hoverCursor:"1"
        })
        let text = new fabric.Text((spaceCounter+1).toString(),{fontSize:30,left:20})
        setSpaceCounter(pr=>pr+1)
        const group =new fabric.Group([rect,text]);
        canvas.add(group)
    }
    const deleteSpace = () => {
        console.log(canvas);
        let obj = canvas.getActiveObject();
        if (obj) {
            canvas.remove(obj);
        }
    }
    const addCurvedStreet = () => {
        if (isStreet) {
            canvas.clear();
        }
        canvas.add(new fabric.Rect({
            width: 500,
            height: 50, top: 250 - 30, left: -10,
            fill: "#d9dadb", strokeWidth: 5,selectable:false
        }))
        canvas.add(new fabric.Rect({
            width: 50,
            height: 280, top: 250 - 30, left: 500 - 30,
            fill: "#d9dadb", strokeWidth: 5,selectable:false,
        }))
        setIsStreet(true)
    }
    
    const addStraigtSreet = () => {
        if (isStreet) {
            canvas.clear();
        }
        canvas.add(new fabric.Rect({
            width: 1100,
            height: 50, top: 126 * 2 + 60, left: -10,
            fill: "#d9dadb", strokeWidth: 5,selectable:false
        }))
        canvas.add(new fabric.Rect({
            width: 1100,
            height: 50,
            top: 126,
            fill: "#d9dadb", strokeWidth: 5,selectable:false
        }))
        setIsStreet(true)
    }
    const insertText=()=>{
        if(text)
        canvas.add(new fabric.Text(text))
    }
    useEffect(()=>{
        document.onkeydown=(event)=>{ 
                if(event.key=='d'){
                    deleteSpace()
                }
          }
    },[canvas])
    return (
        <div className='my-2 items-center flex gap-2'>
            <button onClick={addSpace} className='btn bg-gray-400 hover:bg-gray-500'>Add Space</button>
            <button onClick={deleteSpace} className='btn bg-gray-400 hover:bg-gray-500'
            >Delete</button>
            <div>
                <button
                    id="basic-button" className='btn bg-gray-400 hover:bg-gray-500'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Insert Street <ChevronDownIcon className='inline w-6'/>
                </button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <div onClick={addStraigtSreet} className='m-5  hover:text-gray-300' >
                        <img src={straigtStreet} className='w-20 m-auto border mb-2 hover:cursor-pointer' />
                        <h2>Straight Street</h2>
                    </div>
                    <div onClick={addCurvedStreet} className='m-5 hover:text-gray-300' >
                        <img src={curveStreet} className='w-20 m-auto border mb-2 hover:cursor-pointer' />
                        <h2>Curved Street</h2>
                    </div>
                </Menu>
            </div>
            <div>
                <input value={text} onChange={(e)=>setText(e.target.value)} type="text" className='p-2 border rounded mr-2' />
                <button onClick={insertText} className='btn bg-gray-400 hover:bg-gray-500'>Insert Text</button>
            </div>
            <button onClick={()=>{canvas?.clear();setSpaceCounter(0)}} className='btn bg-gray-400 hover:bg-gray-500'>Clear</button>
        </div>
    )
}


export default Controls