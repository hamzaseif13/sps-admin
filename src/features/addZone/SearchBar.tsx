import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Modal } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

function SearchBar() {
  const [modalOpen, setModalOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null);
  const renderModal = () => {
    setModalOpen(true)
    setTimeout(()=>{
      const searchBox = new google.maps.places.Autocomplete(inputRef.current!);
      searchBox.addListener("place_changed", () => {
        const place = searchBox.getPlace();
      })
    },2000)

  }

  return (
    <>
      <div onClick={renderModal} className='hover:opacity-50 hover:cursor-pointer absolute z-10 top-2 rounded  right-1/2 text-white bg-zinc-500'>
        <MagnifyingGlassIcon className='w-10' />
      </div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* absolute top-1/2    right-1/2
                translate-x-1/2 -translate-y-1/2*/}
        <div className='rounded opacity-50 p-2 h-1/2  w-1/2   bg-white'>
          <input type="text" ref={inputRef} className='p-2 border w-full z-10' />
        </div>
      </Modal>
    </>
  )
}

export default SearchBar