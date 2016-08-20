import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import * as reducers from './reducers'
import {routerReducer, sync} from './syncVueRouterWithRedux'


const allReducers = combineReducers({
    router: routerReducer,
    ...reducers
});

const loggerMiddleware = createLogger()




function bla (a) {
	 return ({ getState }) => (next) => (action) => {

	 	//console.log(getState, next, action)

	    // exit early if predicate function returns false
	    // if (typeof predicate === `function` && !predicate(getState, action)) {
	    //   return next(action);
	    // }
	    return next(action);
	}
}



export default createStore(
	allReducers, 
	window.devToolsExtension && window.devToolsExtension(), 
	applyMiddleware(new bla, thunkMiddleware, loggerMiddleware)
)