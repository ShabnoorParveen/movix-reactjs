 import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},//api call responses store
        genres: {},//store data of genre by api call 
    },
    reducers: {
        //method1
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        //method2
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
