import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  {
    path: '/user',
    component: Layout,
    children: [
      { path: 'profile', component: () => import('@/views/user/index') }
    ]
  },

  {
    path: '/department',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Department',
      component: () => import('@/views/department/index'),
      meta: { title: '部门管理', icon: 'el-icon-office-building' }
    }]
  },

  {
    path: '/employee',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Employee',
      component: () => import('@/views/employee/index'),
      meta: { title: '员工管理', icon: 'el-icon-user' }
    }]
  },

  {
    path: '/permission',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Permission',
      component: () => import('@/views/permission/index'),
      meta: { title: '权限管理', icon: 'el-icon-lock', permission: [1, 2] }
    }]
  },

  {
    path: '/performance-plan',
    component: Layout,
    children: [{
      path: 'index',
      name: 'PerformancePlan',
      component: () => import('@/views/performance-plan/index'),
      meta: { title: '绩效考核方案', icon: 'el-icon-document' }
    }]
  },

  {
    path: '/performance',
    component: Layout,
    redirect: '/performance/attendance',
    name: 'Performance',
    meta: { title: '绩效考核', icon: 'el-icon-s-data' },
    children: [
      {
        path: 'attendance',
        name: 'Attendance',
        component: () => import('@/views/performance/attendance/index'),
        meta: { title: '考勤' }
      },
      {
        path: 'competition',
        name: 'Competition',
        component: () => import('@/views/performance/competition/index'),
        meta: { title: '科技竞赛' }
      },
      {
        path: 'tutor',
        name: 'Tutor',
        component: () => import('@/views/performance/tutor/index'),
        meta: { title: '班导师' }
      },
      {
        path: 'reward',
        name: 'Reward',
        component: () => import('@/views/performance/reward/index'),
        redirect: 'types',
        meta: { title: '奖励' },
        children: [
          {
            path: 'types',
            name: 'RewardTypes',
            component: () => import('@/views/performance/reward/types'),
            meta: { title: '奖励类型' }
          },
          {
            path: 'content',
            name: 'RewardContent',
            component: () => import('@/views/performance/reward/content'),
            meta: { title: '奖励内容' }
          }
        ]
      },
      {
        path: '/performance/punishment',
        name: 'Punishment',
        component: () => import('@/views/performance/punishment/index'),
        redirect: 'types',
        meta: { title: '惩罚' },
        children: [
          {
            path: 'types',
            name: 'PunishmentTypes',
            component: () => import('@/views/performance/punishment/types'),
            meta: { title: '惩罚类型' }
          },
          {
            path: 'content',
            name: 'PunishmentContent',
            component: () => import('@/views/performance/punishment/content'),
            meta: { title: '惩罚内容' }
          }
        ]
      }
    ]
  },
  {
    path: '/management',
    component: Layout,
    redirect: '/management/score',
    name: 'Management',
    meta: { title: '绩效管理', icon: 'el-icon-s-check' },
    children: [
      {
        path: 'score',
        name: 'Score',
        component: () => import('@/views/performance/management/score'),
        meta: { title: '绩效分数' }
      },
      {
        path: 'amount',
        name: 'Amount',
        component: () => import('@/views/performance/management/amount'),
        meta: { title: '绩效金额' }
      }
    ]
  },

  {
    path: '/401',
    component: () => import('@/views/401'),
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
