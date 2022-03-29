import { SET_ERROR, SET_LOADING, SET_ONE_PACKAGE_DATA, SET_ONE_PACKAGE_ERROR, SET_ONE_PACKAGE_LOADING, SET_PACKAGE_LIST } from "../types";

export default {
    [SET_LOADING]: (state, payload) => {
        state.loading = payload;
    },
    [SET_ERROR]: (state, payload) => {
        state.error = payload;
    },
    [SET_PACKAGE_LIST]: (state, payload) => {
        state.packageList = payload;
    },
    [SET_ONE_PACKAGE_LOADING]: (state, payload) => {
        state.packageLoading = payload;
    },
    [SET_ONE_PACKAGE_ERROR]: (state, payload) => {
        state.packageError = payload;
    },
    [SET_ONE_PACKAGE_DATA]: (state, payload) => {
        state.packageData = payload;
    }
}