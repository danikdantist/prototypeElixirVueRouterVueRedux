import bar from './components/bar'
import indexPage from './components/indexPage'

export function configRouter (router) {

  // normal routes
  router.map({
    '/bar': {
      component: bar
    },
    '/': {
      component: indexPage
    }
  })
}