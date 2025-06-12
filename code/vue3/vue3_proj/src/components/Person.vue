<template>

    
</template>



<script lang="ts" setup name="Person">
    import {type PersonInter, type Persons} from '@/types'

    let person: PersonInter = {
        id: '1',
        name: '张三',
        age: 18
    }

    console.log(person)
    

</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    .button {
        margin: 0 5px;
    }
</style>