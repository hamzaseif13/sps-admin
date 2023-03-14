import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { selectZoneLocation, setZoneLocation } from './addZoneSlice';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
function SelectLocation({ setStepComplete }: { setStepComplete: any }) {
    const mapRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch<AppDispatch>();
    const location = useSelector(selectZoneLocation);

    var globalMap: google.maps.Map;
    var zoneMarker: google.maps.Marker | undefined;
    var geoCoder = new google.maps.Geocoder();

    const [address, setAddress] = useState<string>()
    useEffect(() => {
        globalMap = new window.google.maps.Map(mapRef.current!, {
            zoom: 14,
            center: location ? location.latLng : { lat: 31.9539, lng: 35.9106 },
            clickableIcons: false,
            fullscreenControl:false,
        })
        if (location) {
            zoneMarker = new google.maps.Marker({
                map: globalMap,
                position: location.latLng,
                draggable: true
            });
            setStepComplete(true);
        }
        globalMap.addListener("click", (event: google.maps.MapMouseEvent) => {
            if (zoneMarker) {
                zoneMarker.setMap(null)
            }
            zoneMarker = new google.maps.Marker({
                map: globalMap,
                position: event.latLng,
                draggable: true
            });
            setStepComplete(true)
            globalMap.panTo(event.latLng!)
            geoCoder.geocode({ location: event.latLng }).then(response => {
                if (response.results[0]) {
                    setAddress(response.results[0].formatted_address)
                    dispatch(setZoneLocation({
                        latLng: zoneMarker!.getPosition()?.toJSON()!,
                        address: response.results[0].formatted_address
                    }))
                }
            })
        })
        
    }, [])
    useEffect(()=>{
        const searchBox = new google.maps.places.Autocomplete(inputRef.current!);
        searchBox.addListener("place_changed",()=>{
            const place = searchBox.getPlace();
            globalMap.panTo(place.geometry?.location!);
            globalMap.setZoom(16)
        })
    },[])
    return (
        <div className=''>
               <span className='block h-8'>{  address && address}</span>
            <div className='relative'>
            <div
                className='flex absolute z-10 top-0 rounded  right-0 text-white bg-zinc-500'>
                <input type="text" ref={inputRef}className='p-2 bg-white border text-black' />
                <MagnifyingGlassIcon className='w-10'/>
            </div>
            <div className='w-full border h-[500px] rounded shadow-lg' ref={mapRef} />
            </div>
        </div>
    )
}

export default SelectLocation