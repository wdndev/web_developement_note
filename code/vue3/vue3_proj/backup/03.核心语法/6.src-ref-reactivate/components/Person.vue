<template>
    <div class="person">
        <h2>汽车信息：一辆{{ car.brand }}，价值{{car.price}}万</h2>
        <button @click="changeCar">换车</button>
        <button @click="changePrice">改价</button>
        <br>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFirstGame">修改第一个游戏的名字</button>
    </div>
    
</template>

<!-- <script lang="ts">
    export default {
        name: 'Person'
    }
</script> -->

<script lang="ts" setup name="Person">
    import { ref } from 'vue'

    // 数据
    let car = ref({brand: '保时捷', price: 100})
    let games = ref([
        {id: 1, name: '英雄联盟'},
        {id: 2, name: 'Counter-Strike'},
        {id: 3, name: 'Dota2'},
    ])

    // 方法
    function changeCar() {
        car.value.brand = '兰博基尼'
    }

    function changePrice() {
        car.value.price += 20
    }

    function changeFirstGame() {
        games.value[0].name = '王者荣耀'
    }
    
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