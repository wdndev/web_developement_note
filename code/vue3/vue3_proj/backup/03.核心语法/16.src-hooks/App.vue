<template>
    <!-- html -->
    <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
    // js ts
    import Person from './components/Person.vue'
    import { ref } from 'vue'
    
    // console.log(personList)
    const isShow = ref(true)

    
</script>

<style>
    /*  css */

</style>