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
                    component: Detail,
                    // props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件
                    // props:{a:1,b:2,c:3}, 

                    // props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件
                    // props:true
                    
                    // props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
                    props(route){
                        console.log(route)
                        return route.params
                    }
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