import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name : "searchResult",
    initialState: {
        searchResult:{}
    },
    //big Reducer which will have microReducers.
    reducers:{
        updateSearchResult(state,action){
            state.searchResult = action.payload
        }

    }
})

//exporting the reducer
export default searchSlice 

//exporting the reducer actions
export const {updateSearchResult} = searchSlice.actions