import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    // path 1
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/Register/Register'),
    },
    // path 2
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/components/Layout/Layout'),
      children: [
        {
          path: '/',
          name: 'inicio',
          component: () => import('@/pages/Home/Home'),
        },
        {
          path: '/mi-perfil',
          name: 'miPerfil',
          component: () => import('@/components/Forms/MiPerfil'),
        },
        {
          path: '/mi-menu',
          name: 'menu',
          component: () => import('@/components/Forms/MiMenu'),
        },
        {
          path: '/categorias',
          name: 'categorias',
          component: () => import('@/pages/Categorias/Categorias'),
        },
        {
          path: '/restaurantes',
          name: 'restaurantes',
          component: () => import('@/pages/Restaurantes/Restaurantes'),
        },
        {
          path: '/restaurante-tienda',
          name: 'restauranteTienda',
          component: () => import('@/pages/Restaurantes/RestauranteTienda'),
        },
        {
          path: '/tienda',
          name: 'tienda',
          component: () => import('@/pages/Tienda/Tienda'),
        },
      ],
    },
    // Here next path if need
    
    // Last path (Errors)
    {
      path: '*',
      name: 'Error',
      component: () => import('@/components/Error/Error'),
    }
  ],
});
