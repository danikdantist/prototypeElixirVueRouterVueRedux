import {bindActionCreators} from 'redux'

export const createMixin = (myActions, store) => ({
  
    data: function() {
      return {
        state: null,
        store: store,
        actions: null
      }
    },

    created: function() {
      var updateState = this.updateState.bind(this)
      this.unsubscribe = this.store.subscribe(updateState)
      this.actions = bindActionCreators(myActions, this.store.dispatch);
      updateState();
    },

    destroyed: function() {
      this.unsubscribe();
    },

    methods: {
      updateState: function() {
        this.state = this.store.getState();
      },
    }
})

const yy = (x, y) => { return x+y};

console.log(yy(1, 2))