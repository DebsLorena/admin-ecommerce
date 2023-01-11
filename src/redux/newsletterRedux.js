import { createSlice } from "@reduxjs/toolkit";

export const newsletterSlice = createSlice({
    name: "newsletter",
    initialState: {
        email: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getNewsletterStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getNewsletterSuccess: (state, action) => {
            state.isFetching = false;
            state.newsletters = action.payload;
        },
        getNewsletterFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //DELETE
        deleteNewsletterStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteNewsletterSuccess: (state, action) => {
            state.isFetching = false;
            state.newsletters.splice(
                state.newsletters.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteNewsletterFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getNewsletterStart,
    getNewsletterSuccess,
    getNewsletterFailure,
    deleteNewsletterStart,
    deleteNewsletterSuccess,
    deleteNewsletterFailure,
} = newsletterSlice.actions;

export default newsletterSlice.reducer;