import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index.vue'
import Home from "./pages/home"

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: Index },{ path: '/home', component: Home }],
})
