import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";


interface ZoneLocation {
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
        increaseStep: (state, action: PayloadAction<undefined>) => {
            if (state.step < state.totalSteps) {
                state.step += 1
            }
        },
        setStep:(state,action:PayloadAction<number>)=>{
            if(action.payload>0 && action.payload<=state.totalSteps ){
                state.step = action.payload;
            }
        },
        decreaseStep: (state, action: PayloadAction<undefined>) => {
            if (state.step > 1) {
                state.step -= 1
            }
        }
    }
})
export default addZoneSlice.reducer
export const { setZoneLocation, increaseStep, decreaseStep,setStep } = addZoneSlice.actions
export const selectCurrentStep = (state: RootState) => state.addZoneReducer.step
export const selectTotalSteps = (state: RootState) => state.addZoneReducer.totalSteps
export const selectZoneLocation = (state:RootState)=>state.addZoneReducer.zoneLocation