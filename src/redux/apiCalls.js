import { loginFailure, loginStart, loginSuccess, logoutSucess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
    getProductFailure, getProductStart, getProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess, addProductFailure, addProductStart, addProductSuccess
} from "./productRedux";

import {
    getUserFailure, getUserStart, getUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, updateUserFailure, updateUserStart, updateUserSuccess, addUserFailure, addUserStart, addUserSuccess
} from "./userListRedux";

import {
    getSliderFailure, getSliderStart, getSliderSuccess, deleteSliderFailure, deleteSliderStart, deleteSliderSuccess, addSliderFailure,addSliderStart, addSliderSuccess,
} from "./sliderRedux";

import {
    getBannerFailure, getBannerStart, getBannerSuccess, deleteBannerFailure, deleteBannerStart, deleteBannerSuccess, addBannerFailure, addBannerStart, addBannerSuccess
} from "./bannerRedux";


//LOGIN

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

//LOGOUT
export const logout = async (dispatch, user) => {
    try {
        const res = await publicRequest.post("/auth/logout", user);
        dispatch(logoutSucess(res.data));
    } catch (err) {}
};

//PRODUCTS
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(res.data));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // update
        dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
};

//USERS
export const getUsers = async (dispatch) => {
    dispatch(getUserStart());
    try {
        const res = await publicRequest.get("/users");
        dispatch(getUserSuccess(res.data));
    } catch (err) {
        dispatch(getUserFailure(err));
    }
};

export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try {
        const res = await userRequest.delete(`/users/${id}`);
        dispatch(deleteUserSuccess(res.data));
    } catch (err) {
        dispatch(deleteUserFailure());
    }
};

export const updateUser = async (id, user, dispatch) => {
    dispatch(updateUserStart());
    try {
        // update
        dispatch(updateUserSuccess({ id, user }));
    } catch (err) {
        dispatch(updateUserFailure());
    }
};

export const addUser = async (user, dispatch) => {
    dispatch(addUserStart());
    try {
        const res = await userRequest.post(`/users`, user);
        dispatch(addUserSuccess(res.data));
    } catch (err) {
        dispatch(addUserFailure());
    }
};


//SLIDERS
export const getSliders = async (dispatch) => {
    dispatch(getSliderStart());
    try {
        const res = await publicRequest.get("/sliders");
        dispatch(getSliderSuccess(res.data));
    } catch (err) {
        dispatch(getSliderFailure());
    }
};

export const deleteSlider = async (id, dispatch) => {
    dispatch(deleteSliderStart());
    try {
        const res = await userRequest.delete(`/sliders/${id}`);
        dispatch(deleteSliderSuccess(res.data));
    } catch (err) {
        dispatch(deleteSliderFailure());
    }
};

export const addSlider = async (slider, dispatch) => {
    dispatch(addSliderStart());
    try {
        const res = await userRequest.post(`/sliders`, slider);
        dispatch(addSliderSuccess(res.data));
    } catch (err) {
        dispatch(addSliderFailure());
    }
};

//BANNER

export const getBanners = async (dispatch) => {
    dispatch(getBannerStart());
    try {
        const res = await publicRequest.get("/banners");
        dispatch(getBannerSuccess(res.data));
    } catch (err) {
        dispatch(getBannerFailure());
    }
};

export const deleteBanner = async (id, dispatch) => {
    dispatch(deleteBannerStart());
    try {
        const res = await userRequest.delete(`/banners/${id}`);
        dispatch(deleteBannerSuccess(res.data));
    } catch (err) {
        dispatch(deleteBannerFailure());
    }
};

export const addBanner = async (banner, dispatch) => {
    dispatch(addBannerStart());
    try {
        const res = await userRequest.post(`/banners`, banner);
        dispatch(addBannerSuccess(res.data));
    } catch (err) {
        dispatch(addBannerFailure());
    }
};
