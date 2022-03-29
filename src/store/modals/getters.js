export default {
    getCurrentModal(state) {
        return {modalShow: state.modalShow, modalType: state.modalType, modalData: state.modalData};
    }
}