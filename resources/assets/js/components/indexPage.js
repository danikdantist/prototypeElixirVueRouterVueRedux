import Vue from 'vue'   
import items from './items'


export default Vue.extend({
	template: require('./indexPage.html'),
	components: {
		'items-view': items
	}
});