import VueMeta from '../../node_modules/vue-meta'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData, // site metadata
    isServer // is this enhancement applied in server-rendering or client
  }) => {
    Vue.use(VueMeta)
    // router.addRoutes([
    //   { path: '/catovis/2020/09/15/catovis-suite/', redirect: '/'}
    // ])
  }