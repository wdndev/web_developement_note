<template>
    <!-- html -->
    <div class="app">
        <div>你好啊！</div>
        <Person/>
    </div>
</template>

<script>
    // js ts
    import Person from './components/Person.vue';
    export default {
        name: 'App',    // 组件名
        components: { Person }, // 注册组件
        // setup() {

        // }
    }
</script>

<style>
    /*  css */
    .app {
        /* color: red; */
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>