import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
    name: "slider",
    initialState: {
        sliders: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getSliderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getSliderSuccess: (state, action) => {
            state.isFetching = false;
            state.sliders = action.payload;
        },
        getSliderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //DELETE
        deleteSliderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteSliderSuccess: (state, action) => {
            state.isFetching = false;
            state.sliders.splice(
                state.sliders.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteSliderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //Add
        addSliderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addSlidertSuccess: (state, action) => {
            state.isFetching = false;
            state.sliders.push(action.payload);
        },
        addSliderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getSliderStart,
    getSliderSuccess,
    getSliderFailure,
    deleteSliderStart,
    deleteSliderSuccess,
    deleteSliderFailure,
    addSliderStart,
    addSliderSuccess,
    addSliderFailure,
} = sliderSlice.actions;

export default sliderSlice.reducer;