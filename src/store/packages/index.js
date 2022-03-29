import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export default {
    state: {
        loading: true,
        error: null,
        packageList: [],
        packageLoading: true,
        packageError: null,
        packageData: {}
    },
    getters,
    mutations,
    actions
}