import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import MasonryWall from '@yeger/vue2-masonry-wall'
import YmapPlugin from 'vue-yandex-maps'
import Lingallery from 'lingallery';


const settings = {
  apiKey: 'aaba05d9-d4db-4ccc-948e-cfea78f9a2db',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

Vue.config.productionTip = false
Vue.use( Lingallery);
Vue.use(MasonryWall)
Vue.use(YmapPlugin, settings)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

