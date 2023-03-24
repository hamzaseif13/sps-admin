import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";


export interface ZoneLocation {
    latLng: { lng: number, lat: number },
    address: string
}
interface ZoneSliceState {
    zoneLocation?:ZoneLocation
    step: number
    totalSteps: number
}
const initialState: ZoneSliceState= {
    step: 1, 
    totalSteps: 2
}
const addZoneSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        setZoneLocation: (state, action: PayloadAction<ZoneLocation>) => {
            state.zoneLocation = action.payload
        },
        resetZoneLocation: (state) => {
            state.zoneLocation = undefined
        }
      
       
    }
})
export default addZoneSlice.reducer
export const { setZoneLocation,  resetZoneLocation} = addZoneSlice.actions
export const selectCurrentStep = (state: RootState) => state.addZoneReducer.step
export const selectTotalSteps = (state: RootState) => state.addZoneReducer.totalSteps
export const selectZoneLocation = (state:RootState)=>state.addZoneReducer.zoneLocation