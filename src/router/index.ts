import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: () => import('@/views/PokedexView.vue'),
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/TeamView.vue'),
    },
    {
      path: '/pokedex/:slug',
      name: 'pokemon',
      component: () => import('@/views/PokemonView.vue'),
    },
  ],
})

export default router
