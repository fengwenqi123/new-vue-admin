import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/Section',
    name: 'Example',
    meta: { title: '截面管理', icon: 'example' },
    children: [
      {
        path: 'Section',
        name: 'Section',
        component: () => import('@/views/section/index'),
        meta: { title: '截面点', icon: 'table' }
      },
      {
        path: 'History',
        name: 'History',
        component: () => import('@/views/History/index'),
        meta: { title: '历史管理', icon: 'tree' }
      },
      {
        path: 'AlarmDisposal',
        name: 'AlarmDisposal',
        component: () => import('@/views/AlarmDisposal/index'),
        meta: { title: '告警处置', icon: 'tree' }
      },
      {
        path: 'RedAlarmDisposal',
        name: 'RedAlarmDisposal',
        component: () => import('@/views/RedAlarmDisposal/index'),
        meta: { title: '红色告警处置', icon: 'tree' }
      },
      {
        path: 'GrennAlarmDisposal',
        name: 'GrennAlarmDisposal',
        component: () => import('@/views/GrennAlarmDisposal/index'),
        meta: { title: '绿色告警处置', icon: 'tree' }
      },
      {
        path: 'big',
        name: 'big',
        component: () => import('@/components/Magnifier/index1'),
        meta: { title: '放大镜', icon: 'tree' }
      }
    ]
  },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form1', icon: 'form' }
  //     }
  //   ]
  // },
  // {
  //   path: '/setting',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'SectionManagement',
  //       name: 'SectionManagement',
  //       component: () => import('@/views/SectionManagement/index'),
  //       meta: { title: '截面管理', icon: 'tree' }
  //     }
  //   ]
  // },
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/SectionManagement',
    name: 'setting',
    meta: { title: '系统管理', icon: 'example' },
    children: [
      {
        path: 'SectionManagement',
        name: 'SectionManagement',
        component: () => import('@/views/SectionManagement/index'),
        meta: { title: '截面管理', icon: 'tree' }
      }/*,
      {
        path: 'SectionManagement',
        name: 'SectionManagement',
        component: () => import('@/views/SectionManagement/index'),
        meta: { title: '元器件管理', icon: 'tree' }
      }*/
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

