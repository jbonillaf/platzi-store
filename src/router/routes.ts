import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('src/pages/IndexPage.vue'),
      },
      {
        path: 'products',
        name: 'products-home',
        component: () => import('src/modules/products/pages/HomePage.vue'),
      },
      {
        path: 'products/:productId',
        name: 'products-detail',
        component: () => import('src/modules/products/pages/DetailPage.vue'),
      },
      {
        path: 'products/create',
        name: 'products-create',
        meta: {
          isCreate: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "Create" */ 'src/modules/products/pages/CreateOrEditPage.vue'
          ),
      },
      {
        path: 'products/:productId/edit',
        name: 'products-edit',
        meta: {
          isUpdate: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "Edit" */ 'src/modules/products/pages/CreateOrEditPage.vue'
          ),
      },
      // Category
      {
        path: 'categories',
        name: 'categories-home',
        component: () => import('src/modules/categories/pages/HomePage.vue'),
      },
      {
        path: 'categories/:categoryId',
        name: 'categories-detail',
        component: () => import('src/modules/categories/pages/DetailPage.vue'),
      },
      {
        path: 'categories/create',
        name: 'categories-create',
        meta: {
          isCreate: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "Create" */ 'src/modules/categories/pages/CreateOrEditPage.vue'
          ),
      },
      {
        path: 'categories/:categoryId/edit',
        name: 'categories-edit',
        meta: {
          isUpdate: true,
        },
        component: () =>
          import(
            /* webpackChunkName: "Edit" */ 'src/modules/categories/pages/CreateOrEditPage.vue'
          ),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
