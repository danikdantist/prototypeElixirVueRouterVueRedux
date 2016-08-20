import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'
import { configRouter } from './config-router'


Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

configRouter(router);


import {sync} from './syncVueRouterWithRedux'

sync(store, router, 'router');

const App = Vue.extend({
	template: require('./index.html'),
});

router.start(App, '#app')

window.router = router;