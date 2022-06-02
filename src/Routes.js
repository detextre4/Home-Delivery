import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    // path 1
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/Register/Register'),
    },
    // path 2
    {
      path: '/',
      name: 'layout',
      component: () => import('@/components/Layout/Layout'),
      children: [
        {
          path: '/home',
          name: 'inicio',
          component: () => import('@/pages/Home/Home'),
        },
        {
          path: '/mi-perfil',
          name: 'perfil',
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
          path: '/restaurante-tienda:id?',
          name: 'restauranteTienda',
          component: () => import('@/pages/Restaurantes/RestauranteTienda'),
        },
        {
          path: '/tienda',
          name: 'tienda',
          component: () => import('@/pages/Tienda/Tienda'),
        },
        {
          path: '/delivery',
          name: 'delivery',
          component: () => import('@/pages/Delivery/Delivery'),
        },
      ],
    },
    // Here next path if need
    
    // Last path (Errors)
    {
      path: '*',
      name: 'error',
      component: () => import('@/components/Error/Error'),
    }
  ],
});
