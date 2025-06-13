<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="item in newsList" :key="item.id"> 
        <button @click="showNewsDetail(item)">查看</button>
        <!-- <a href="#">{{ item.title }}</a> -->
        <!-- 跳转并携带params参数（to的字符串写法） -->
        <!-- <RouterLink :to="`/news/detail/${item.id}/${item.title}/${item.content}`">{{ item.title }}</RouterLink> -->
        <!-- 跳转并携带params参数（to的对象写法） -->
        <RouterLink 
          :to="{
            name:'xiangqing', //用name跳转
            params:{
              id:item.id,
              title:item.title,
              content:item.content
            }
          }"
        >
          {{item.title}}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
  import { reactive } from 'vue'
  import {RouterLink, RouterView} from 'vue-router'
  import {useRouter} from 'vue-router'

  const router = useRouter()

  const newsList = reactive([
    { id: 'abc01', title: '很好的抗癌食物', content: '西兰花' },
    {  id: 'abc02', title: '如何一夜暴富', content: 'xueIT' },
    {  id: 'abc03', title: '万万没效果到', content: '周一' },
    {  id: 'abc04', title: '好消息! 好消息！', content: '过年了' }
  ])

  interface NewsInter {
    id: string;
    title: string;
    content: string;
  }

  function showNewsDetail(item: NewsInter) {
    router.push({
      name:'xiangqing', //用name跳转
      params: {
        id: item.id,
        title: item.title,
        content: item.content
      }
    })
  }

</script>

<style scoped>
  /* 新闻 */
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .news ul {
    margin-top: 30px;
    /*list-style: none;*/
    padding-left: 10px;
  }
  .news li::marker  {
    color: #64967E;
  }
  .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
  }
  .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
</style>