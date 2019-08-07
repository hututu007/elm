import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [{
    path: '/',
    name: 'Index',
    redirect: '/goods',
    component: () => import('../view/index/index.vue'),
    children: [{
        path: '/goods',
        name: 'Goods',
        component: () => import('../view/goods/index.vue'),
      },
      {
        path: '/comment',
        name: 'Comment',
        component: () => import('../view/comment/index.vue'),
      },
      {
        path: '/merchant',
        name: 'Merchant',
        component: () => import('../view/merchant/index.vue'),
      },
    ]

  }]
})
