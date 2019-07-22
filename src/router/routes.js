
const MSite = () => import('../pages/MSite/MSite.vue')
const Category = () => import('../pages/Category/Category.vue')
const Shopcar = () => import('../pages/Shopcar/Shopcar.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Thing = () => import('../pages/Thing/Thing.vue')
const Search = () => import('../pages/Search/Search.vue')
const Find = () => import('../pages/Thing/Find/Find.vue')
const Choose = () => import('../pages/Thing/Choose/Choose.vue')

export default [
  {
    path: '/msite',
    component: MSite,
    meta:{
      isShow:true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/category',
    component: Category,
    meta:{
      isShow:true
    }
  },
  {
    path: '/shopcar',
    component: Shopcar,
    meta:{
      isShow:true
    }
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/thing',
    component: Thing,
    redirect:'/things/find',
    children:[
      {
        path:'/things/find',
        component:Find,
        meta:{
          isShow:true
        }
      },
      {
        path:'/things/choose',
        component:Choose
      },
    ],
    meta:{
      isShow:true
    },
    
  },

  { // 当访问根路径自动重定向到/miste
    path: '/',
    redirect: '/msite'
  }
]
