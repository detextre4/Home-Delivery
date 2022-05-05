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
          name: 'Home',
          component: () => import('@/pages/Home/Home'),
        },
        {
          path: '/mi-perfil',
          name: 'MiPerfil',
          component: () => import('@/components/Forms/MiPerfil'),
        },
        {
          path: '/mi-tienda',
          name: 'Tienda',
          component: () => import('@/components/Forms/Tienda'),
        },
        {
          path: '/mi-menu',
          name: 'Menu',
          component: () => import('@/components/Forms/MiMenu'),
        },
        {
          path: '/categorias',
          name: 'Categorias',
          component: () => import('@/pages/Categorias/Categorias'),
        },
        {
          path: '/tienda',
          name: 'Tienda',
          component: () => import('@/pages/Tienda/Tienda'),
        },
      ],
    },
    // here path 3 if need
    
    // path 4
    {
      path: '*',
      name: 'Error',
      component: () => import('@/components/Error/Error'),
    }
  ],
});
