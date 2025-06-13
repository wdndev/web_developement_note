<template>
    <!-- html -->
    <Person a="哈哈" :list="personList"/>
</template>

<script lang="ts" setup name="App">
    // js ts
    import Person from './components/Person.vue'
    import { reactive } from 'vue'
    import { type Persons } from '@/types'
    
    let personList= reactive<Persons>([
        {id: 'abc01', name: '张三', age: 18},
        {id: 'abc02', name: '李四', age: 20},
        {id: 'abc03', name: '王五', age: 35},
    ])

    // console.log(personList)

    
</script>

<style>
    /*  css */

</style>