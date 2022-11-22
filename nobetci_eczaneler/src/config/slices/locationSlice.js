import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: null,
    latitude: 41.0391683,
    longitude: 28.9982707,
}
const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload;
        },
        setLatitude: (state, action) => {
            state.latitude = action.payload;
        },
        setLongitude: (state, action) => {
            state.longitude = action.payload;
        }
    }
})
export { locationSlice };
export const { setLocation, setLatitude, setLongitude } = locationSlice.actions;
export default locationSlice.reducer;