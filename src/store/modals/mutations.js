import { SET_MODAL_DATA } from "../types";

export default {
    [SET_MODAL_DATA]: (state, payload) => {
        state.modalShow = payload.modalShow;
        state.modalType = payload.modalType;
        state.modalData = payload.modalData;
    }
}