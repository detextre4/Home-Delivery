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
          path: '/mi-menu',
          name: 'Menu',
          component: () => import('@/components/Forms/MiMenu'),
        },
        {
          path: '/categorias',
          name: 'Categorias',
          component: () => import('@/pages/Categorias/Categorias'),
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
