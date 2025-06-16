<template>
  <div class="app">
    <!-- <h2> x 坐标: {{ x }}</h2>
    <h2> y 坐标: {{ y }}</h2>
    <br>
    <span></span>
    <br>
    <h2 v-if="loading"> Loading... </h2>
    <img v-if="!loading && result" :src="result.message" alt="" />
    <br>
    <br> -->
    <button @click="changeLang('en')">英文</button>
    <button @click="changeLang('zh')">中文</button>
    <MyProfile @change="onChange" />
  </div>
</template>

<script setup lang="ts" name="App">
  import { provide, ref } from 'vue';
  import useMousePosition from './hooks/useMousePosition';
  import useURLLoader from './hooks/useURLLoader';
  import MyProfile from './components/MyProfile.vue';
  import {langKey} from './keys'

  interface DogResult {
    message: string;
    status: string;
  }

  const { x, y } = useMousePosition();

  const { loading, result, error } = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random');

  console.log(loading);

  const onChange = (hidden: boolean) => {
    document.title = hidden ? '年龄被隐藏了～' : '年龄显示出来了'
    console.log(hidden);
  }

  const lang = ref('zh')
  const changeLang = (type: string) => {
    lang.value = type
  }
  provide(langKey, lang)
  
</script>

<style>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>