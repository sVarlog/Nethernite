export default {
    getError: (state) => {
        return state.error;
    },
    getLoading: (state) => {
        return state.loading;
    },
    getPackageList: (state) => {
        return state.packageList;
    },
    getPackageLoading: (state) => {
        return state.packageLoading;
    },
    getPackageError: (state) => {
        return state.packageError;
    },
    getPackageData: (state) => {
        return state.packageData;
    },
}