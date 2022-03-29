import Vue from 'vue';
import Vuex from 'vuex';

import { SET_CURRENT_WIDTH } from './types';

import packageModule from './packages/index';
import modalsModule from './modals/index';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
		currentWidth: 0,
		isMobile: false,
    },
	getters: {
		getIsMobile(state) {
			return state.isMobile;
		},
		getCurrentWidth(state) {
			return state.currentWidth;
		},
	},
    mutations: {
		[SET_CURRENT_WIDTH]: (state, payload) => {
			state.currentWidth = payload;
			state.isMobile = payload <= 800;
		}
    },
    actions: {
		setCurrentWidthAction({commit}, payload) {
			commit(SET_CURRENT_WIDTH, payload);
		}
    },
    modules: {
		packageModule,
		modalsModule
    }
})
