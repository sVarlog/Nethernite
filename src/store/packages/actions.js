import axios from "axios";
import { SET_ERROR, SET_LOADING, SET_ONE_PACKAGE_DATA, SET_ONE_PACKAGE_ERROR, SET_ONE_PACKAGE_LOADING, SET_PACKAGE_LIST } from "../types";

export default {
    async loadPackagesAction({commit}) {
        try {
            commit(SET_ERROR, null);
            commit(SET_LOADING, true);
            const response = await axios.get('https://data.jsdelivr.com/v1/stats/packages');
            commit(SET_PACKAGE_LIST, response.data);
            commit(SET_LOADING, false);
        } catch (err) {
            commit(SET_ERROR, err);
            commit(SET_LOADING, false);
            console.log(err);
        }
    },
    async loadOnePackageAction({commit}, payload) {
        try {
            const {type, name} = payload;
            commit(SET_ONE_PACKAGE_ERROR, null);
            commit(SET_ONE_PACKAGE_LOADING, true);
            const response = await axios.get(`https://data.jsdelivr.com/v1/package/${type}/${name}`);
            commit(SET_ONE_PACKAGE_DATA, response.data);
            commit(SET_ONE_PACKAGE_LOADING, false);
        } catch (err) {
            commit(SET_ONE_PACKAGE_LOADING, false);
            commit(SET_ONE_PACKAGE_ERROR, err);
        }
    },
    resetOnePackageAction({commit}) {
        commit(SET_ONE_PACKAGE_LOADING, true);
        commit(SET_ONE_PACKAGE_ERROR, null);
        commit(SET_ONE_PACKAGE_DATA, {});
    }
}