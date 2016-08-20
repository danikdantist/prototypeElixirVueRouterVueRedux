import {createMixin} from './reduxMixinForVue'

import store from './store'
import * as actions from './actions'

export default createMixin(actions, store)