import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductCatalog from '@/views/ProductCatalog'
import MainPage from '@/views/MainPage'
import OurNews from '@/views/OurNews.vue'
import DeliveryInformation from '@/views/DeliveryInformation.vue'
import ContactUs from '@/views/Contacts.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import NewsPage from '@/views/NewsPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: ProductCatalog
  },
  {
    path: '/news',
    name: 'news',
    component: OurNews
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: DeliveryInformation
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactUs
  },
  {
    path: '/catalog/:id',
    name: 'product',
    component: ProductDetail
  },
  {
    path: '/news/:id',
    name: 'newspage',
    component: NewsPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
