<template>
  <div class="app">
    <h2> x 坐标: {{ x }}</h2>
    <h2> y 坐标: {{ y }}</h2>
    <br>
    <span></span>
    <br>
    <h2 v-if="loading"> Loading... </h2>
    <img v-if="!loading && result" :src="result.message" alt="" />
  </div>
</template>

<script setup lang="ts" name="App">

  import useMousePosition from './hooks/useMousePosition';
  import useURLLoader from './hooks/useURLLoader';

  interface DogResult {
    message: string;
    status: string;
  }

  const { x, y } = useMousePosition();

  const { loading, result, error } = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random');

  console.log(loading);
  
</script>

<style>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>