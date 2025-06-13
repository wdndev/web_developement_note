<template>
    <!-- html -->
    <h2 ref="title2">你好</h2>
    <button  class="button" @click="showLog">点击输出App h2元素</button>
    <Person/>
</template>

<script lang="ts" setup name="App">
    // js ts
    import Person from './components/Person.vue';
    import { ref } from 'vue'

    // 创建一个 title2， 用于储存 ref 标记的内容
    let title2 = ref()
    function showLog() {
        console.log(title2.value)
    }
</script>

<style>
    /*  css */

</style>