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
          path: '/categorias',
          name: 'Categorias',
          component: () => import('@/pages/Categorias/Categorias'),
        },
        {
          path: '/mi-perfil',
          name: 'MiPerfil',
          component: () => import('@/pages/Perfil/MiPerfil'),
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
