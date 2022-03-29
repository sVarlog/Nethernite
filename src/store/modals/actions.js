import { SET_MODAL_DATA } from "../types";

export default {
    showModalAction({commit}, payload) {
        commit(SET_MODAL_DATA, payload);
    },
    hideModalAction({commit}) {
        commit(SET_MODAL_DATA, {modalShow: false, modalType: ''});
    }
}