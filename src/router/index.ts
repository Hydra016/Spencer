import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateBlogVue from '@/views/CreateBlogVue.vue'
import SingleBlog from '@/views/SingleBlog.vue'
import EditBlogVue from '@/views/EditBlogVue.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateBlogVue
  },
  {
    path: '/Blog/:id',
    name: 'Blog',
    component: SingleBlog,
    props: true
  },
  {
    path: '/Edit/:id',
    name: 'Edit Blog',
    component: EditBlogVue,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
