import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active', /* 设置router-link 激活样式方法1 */
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    // 首页
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/team',
      name: 'team',
      component: resolve => require(['@/page/team/team'], resolve)
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['@/page/about/about'], resolve)
    },
    {
      path: '/service',
      name: 'service',
      component: resolve => require(['@/page/service/service'], resolve)
    },
    // {
    //   path: '/solutions',
    //   name: 'solutions',
    //   component: resolve => require(['@/page/solutions/solutions'], resolve)
    // },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: resolve => require(['@/page/news/news'], resolve)
    // },
    // {
    //   path: '/news/newStory',
    //   name: 'newStory',
    //   component: resolve => require(['@/page/news/newStory'], resolve)
    // },
    // {
    //   path: '/accounts',
    //   name: 'accounts',
    //   component: resolve => require(['@/page/accounts/accounts'], resolve)
    // },
    {
      path: '/contacts',
      name: 'contact',
      component: resolve => require(['@/page/contact/contact'], resolve)
    }
  ]
})
