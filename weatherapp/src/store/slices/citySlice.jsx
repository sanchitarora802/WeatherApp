import { createSlice } from "@reduxjs/toolkit";

const citySlice  = createSlice({
    name: "city",
    initialState: {
        cityName: '',
    },
    //big Reducer which will have microReducers.
    reducers:{
        updateCityName(state,action){
            state.cityName = action.payload
        }
    }
})

//exporting the reducer
export default citySlice 

//exporting the reducer actions
export const {updateCityName} = citySlice.actions
export const {updateCityKey} = citySlice.actions