import Vue from 'vue'   

import mx from './../reduxMixin'


export default Vue.extend({
  template: require('./items.html'),
  mixins: [mx],
  
  data() {
    return {
      title: ''
    }
  },
  computed: {
    items: function() {
      return this.state.items.items;
    },
  },
  methods: {
    addItem() {
      if(this.title.trim()) {
        this.actions.addItem(this.title)
      }
      this.title = ''
    },
    removeItem(item) {
      this.actions.removeItem(item.id)
    }
  },
})