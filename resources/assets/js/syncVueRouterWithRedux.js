

const initialState2 = { route: {} }
export function routerReducer(state = initialState2, action) {
	switch(action.type) {
	    case 'router/@change':
	      return Object.assign({},
	        state,
	        { route: action.route }
	      );
	    default:
	      return state;
	  }
}


export function sync(store, router, nameOfReduce = 'router') {
	var isTimeTraveling = false;

	store.subscribe(function(){
		isTimeTraveling = true
		router.go(store.getState()[nameOfReduce].route.path)
		isTimeTraveling = false	
	})

	router.afterEach(function (transition) {
		if (isTimeTraveling) {
	      isTimeTraveling = false
	      return
	    }
	  	store.dispatch({type:'router/@change', route: transition.to});
	})
}


