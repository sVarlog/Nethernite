import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
    state: {
        modalShow: false,
        modalType: '',
        modalData: null
    },
    getters,
    mutations,
    actions
}