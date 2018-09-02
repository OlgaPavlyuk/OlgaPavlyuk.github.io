import Vue from 'vue';
import App from './App.vue';

import Blog from './components/Blog.vue';
import Cases from './components/Cases.vue';
import Clients from './components/Clients.vue';
import Contacts from './components/Contacts.vue';
import Features from './components/Features.vue';
import MainPage from './components/MainPage.vue';
import Services from './components/Services.vue';

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);

import {store} from './store';
import {router} from './routes.js';



new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

