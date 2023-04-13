import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name : "searchResult",
    initialState: {
        isSearch:false,
        searchResult:{}
    },
    //big Reducer which will have microReducers.
    reducers:{
        updateSearch(state,action){
            state.isSearch = action.payload
        },
        updateSearchResult(state,action){
            state.searchResult = action.payload
        }

    }
})

//exporting the reducer
export default searchSlice 

//exporting the reducer actions
export const {updateSearch} = searchSlice.actions
export const {updateSearchResult} = searchSlice.actions