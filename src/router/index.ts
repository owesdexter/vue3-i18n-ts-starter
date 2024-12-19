import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
// import BlogView from '../views/BlogView.vue'
import BlogHome from '../views/blog/index.vue'
import ArticleView from '../views/blog/[id].vue'
import AboutView from '../views/AboutView.vue'
import { type TRoutesItem, type TMenuItem } from '@/types'
// import EquipmentView from '../views/EquipmentView.vue'

const navRoutes: TRoutesItem[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'menu.Home' },
  },
  // {
  //   path: '/blog',
  //   name: 'blog',
  //   component: BlogView,
  //   meta: { title: 'menu.Blog' },
  // },
  {
    path: '/blog',
    meta: { title: 'menu.Blog' },
    children: [
      { path: '', name: 'blogHome', meta: { title: 'menu.Blog' }, component: BlogHome },
      {
        path: ':id',
        name: 'article',
        meta: { title: 'menu.DataTranslation' },
        component: ArticleView,
      },
    ],
  },
  // {
  //   path: '/equipment',
  //   name: 'equipment',
  //   component: EquipmentView,
  //   meta: { title: 'global.menu.Equipment' },
  // },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'menu.About' },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: navRoutes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

const removeAttrComponentFromRoutes = (routes: TRoutesItem[], parentPath?: string): TMenuItem[] =>
  routes.map(({ component, meta, path, children, ...rest }) => ({
    ...rest,
    path: parentPath ? parentPath + (path ? `/${path}` : '') : path,
    ...(meta ? { ...meta } : {}),
    ...(children ? { children: removeAttrComponentFromRoutes(children, path) } : {}),
  }))

export const websiteMenu: TMenuItem[] = removeAttrComponentFromRoutes(navRoutes)

export default router
