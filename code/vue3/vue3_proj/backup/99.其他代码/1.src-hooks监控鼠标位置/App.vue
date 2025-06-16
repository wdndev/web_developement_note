<template>
  <div class="app">
    <h2> x 坐标: {{ x }}</h2>
    <h2> y 坐标: {{ y }}</h2>
  </div>
</template>

<script setup lang="ts" name="App">
  import useMousePosition from './hooks/useMousePosition';
  const { x, y } = useMousePosition();
  // import { onMounted, onUnmounted, ref } from 'vue';

  // const x = ref(0);
  // const y = ref(0);

  // const updateMouse = (e: MouseEvent) => {
  //   // x.value = e.clientX;
  //   // y.value = e.clientY;
  //   x.value = e.pageX;
  //   y.value = e.pageY;
  // };
  // // 创建
  // onMounted(() => {
  //   window.addEventListener('click', updateMouse)
  // })
  // // 销毁
  // onUnmounted(()=>{
  //     console.log('App 组件被销毁了')
  //     document.removeEventListener('click', updateMouse)
  // })
</script>

<style>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>