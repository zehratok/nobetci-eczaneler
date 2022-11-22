import { configureStore } from '@reduxjs/toolkit';
import { locationSlice } from './slices/locationSlice';

const store = configureStore({
    reducer: {
        location: locationSlice.reducer,
    },
});
export default store;