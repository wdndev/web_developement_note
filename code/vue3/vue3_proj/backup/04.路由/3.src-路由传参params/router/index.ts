// 创建一个路由器，并暴漏出去

// 1.引入 createRouter
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'

// 2.创建一个路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'zhuzhan',
            path: '/home',
            component: Home
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiangqing',
                    path: 'detail/:id/:title/:content',
                    component: Detail
                }
            ]
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About
        }
    ]
})

// 暴漏
export default router