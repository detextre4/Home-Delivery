import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Login/Login';
import Layout from '@/components/Layout/Layout';
import Error from "@/components/Error/Error";

// Pages
import Home from '@/pages/Home/Home';

Vue.use(Router);

export default new Router({
  routes: [
    // path 1
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    // path 2
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
    // here path 3 if need

    // path 4
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
