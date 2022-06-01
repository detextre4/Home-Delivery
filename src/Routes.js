import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    // path 1
    {
      path: '/register',
      name: 'register',
      component: () => import('@/layouts/register/Register'),
    },
    // path 2
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layouts/layout/Layout'),
      children: [
        {
          path: '/mi-perfil',
          name: 'miPerfil',
          component: () => import('@/components/forms/miPerfil/MiPerfil'),
        },
        {
          path: '/mi-menu',
          name: 'menu',
          component: () => import('@/components/forms/miMenu/MiMenu'),
        },
        // {
        //   path: '/mi-tienda',
        //   name: 'miTienda',
        //   component: () => import('@/components/forms/miTienda/MiTienda'),
        // },
        {
          path: '/',
          name: 'inicio',
          component: () => import('@/pages/home/Home'),
        },
        {
          path: '/categorias',
          name: 'categorias',
          component: () => import('@/pages/categorias/Categorias'),
        },
        {
          path: '/restaurantes',
          name: 'restaurantes',
          component: () => import('@/pages/restaurantes/Restaurantes'),
        },
        {
          path: '/restaurante-tienda:id?',
          name: 'restauranteTienda',
          component: () => import('@/pages/restaurantes/RestauranteTienda'),
        },
        // {
        //   path: '/tienda',
        //   name: 'tienda',
        //   component: () => import('@/pages/tienda/Tienda'),
        // },
        {
          path: '/delivery',
          name: 'delivery',
          component: () => import('@/pages/delivery/Delivery'),
        },
      ],
    },
    // Here next path if need
    
    // Last path (Errors)
    {
      path: '*',
      name: 'error',
      component: () => import('@/layouts/error/Error'),
    }
  ],
});
