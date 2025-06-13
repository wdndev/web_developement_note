<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="increment">点我+1</button>
        <button @click="decrement">点我-1</button>
        <hr>
        <img v-for="dog in dogList" :src="dog" alt="">
        <br>
        <button @click="getDog">再来一只狗</button>
    </div>
    
</template>


<script lang="ts" setup>
    
    import useDog from "@/hooks/useDog"
    import useSum from "@/hooks/useSum"

    const { sum, increment,decrement } = useSum()
    const { dogList, getDog } = useDog()


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
    img  {
        height: 100px;
        margin: 10px;
    }
</style>