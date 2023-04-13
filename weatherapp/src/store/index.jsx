import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './slices/searchSlice';
import citySlice from './slices/citySlice';


//Store now gets the access of all the Reducer. It checks which reducer is called.

const store = configureStore({
  // reducer acts as rootReducer when only 1 reducer is there and if more than 1 then combineReducer
  reducer: {
    Search: searchSlice.reducer,
    City: citySlice.reducer
  },
});

export default store;