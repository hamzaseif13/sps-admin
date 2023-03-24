import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  selectZoneLocation,
  setZoneLocation,
  ZoneLocation,
} from "../../features/addZone/addZoneSlice";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  zoneLocation?: ZoneLocation;
  setZoneLocation: React.Dispatch<
    React.SetStateAction<ZoneLocation | undefined>
  >;
}

const SelectLocation: React.FC<Props> = ({ zoneLocation, setZoneLocation }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  let globalMap: google.maps.Map;
  let zoneMarker: google.maps.Marker | undefined;
  let geoCoder = new google.maps.Geocoder();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    globalMap = new window.google.maps.Map(mapRef.current!, {
      zoom: 14,
      center: zoneLocation
        ? zoneLocation.latLng
        : { lat: 31.9539, lng: 35.9106 },
      clickableIcons: false,
      fullscreenControl: false,
    });
    if (zoneLocation) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      zoneMarker = new google.maps.Marker({
        map: globalMap,
        position: zoneLocation.latLng,
        draggable: true,
      });
    }
    globalMap.addListener("click", (event: google.maps.MapMouseEvent) => {
      if (zoneMarker) {
        zoneMarker.setMap(null);
      }
      zoneMarker = new google.maps.Marker({
        map: globalMap,
        position: event.latLng,
        draggable: true,
      });
      globalMap.panTo(event.latLng!);
      geoCoder.geocode({ location: event.latLng }).then((response) => {
        if (response.results[0]) {
          setZoneLocation({
            latLng: zoneMarker!.getPosition()?.toJSON()!,
            address: response.results[0].formatted_address,
          });
        }
      });
    });
  }, []);
  useEffect(() => {
    const searchBox = new google.maps.places.Autocomplete(inputRef.current!);
    searchBox.addListener("place_changed", () => {
      const place = searchBox.getPlace();
      globalMap.panTo(place.geometry?.location!);
      globalMap.setZoom(16);
    });
  }, []);
  return (
    <div className="">
      <span className="block h-8">{zoneLocation?.address}</span>
      <div className="relative">
        <div className="flex absolute z-10 top-0 rounded  right-0 text-white bg-zinc-500">
          <input
            type="text"
            ref={inputRef}
            className="p-2 bg-white border text-black"
          />
          <SearchIcon className="w-10" />
        </div>
        <div
          className="w-full border h-[750px] rounded shadow-lg"
          ref={mapRef}
        />
      </div>
    </div>
  );
};

export default SelectLocation;
