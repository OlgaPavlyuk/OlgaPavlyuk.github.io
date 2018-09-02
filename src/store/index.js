import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu';
import page from './modules/page';
import popup from './modules/popup';

export const store = new Vuex.Store({
	modules: {
		menu,
    page,
    popup
	},
	strict: process.env.NODE_ENV !== 'production'
});
