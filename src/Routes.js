import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login/Login';
import Layout from '@/components/Layout/Layout';

// Pages
import Home from '@/pages/Home/Home';
import Error from "@/pages/Error/Error";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
    ],
  },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
