<template>
    <!-- html -->
    <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
    // js ts
    import Person from './components/Person.vue'
    import { ref, onMounted } from 'vue'
    
    // console.log(personList)
    const isShow = ref(true)

    // 挂载完毕
    onMounted(()=>{
        console.log('子--挂载完毕')
    })
    
</script>

<style>
    /*  css */

</style>