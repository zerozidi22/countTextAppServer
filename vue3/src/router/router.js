import Vue from 'vue';
import Router from 'vue-router';
import routerPath from './routerPath';
// import LocalStorageManager from '@/storages/LocalStorageManager';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (from.path === to.path) {
      return;
    }

    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: routerPath.HOME,
    },
    {
      path: routerPath.MAIN,
      meta: { requiresAuth: false },
      component: () => import('@/pages/main.vue'),
    },
    {
      path: routerPath.LIST,
      meta: { requiresAuth: false },
      component: () => import('@/pages/list.vue'),
    },
    {
      path: routerPath.DETAIL,
      meta: { requiresAuth: false },
      component: () => import('@/pages/detail.vue'),
    },
    {
      path: '*', redirect: routerPath.MAIN 
    }
  ],
});

router.beforeEach(async (to, _from, next) => {
  if (to.path === routerPath.HOME) {
    next({
      path: routerPath.MAIN,
    });
    return;
  }

  next();
});

export default router;
