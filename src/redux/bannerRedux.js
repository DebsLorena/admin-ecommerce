import { createSlice } from "@reduxjs/toolkit";

export const bannerSlice = createSlice({
    name: "banner",
    initialState: {
        banners: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getBannerStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getBannerSuccess: (state, action) => {
            state.isFetching = false;
            state.banners = action.payload;
        },
        getBannerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //DELETE
        deleteBannerStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteBannerSuccess: (state, action) => {
            state.isFetching = false;
            state.banners.splice(
                state.banners.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteBannerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //ADD
        addBannerStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addBannerSuccess: (state, action) => {
            state.isFetching = false;
            state.banners.push(action.payload);
        },
        addBannerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getBannerStart,
    getBannerSuccess,
    getBannerFailure,
    deleteBannerStart,
    deleteBannerSuccess,
    deleteBannerFailure,
    addBannerStart,
    addBannerSuccess,
    addBannerFailure,
} = bannerSlice.actions;

export default bannerSlice.reducer;