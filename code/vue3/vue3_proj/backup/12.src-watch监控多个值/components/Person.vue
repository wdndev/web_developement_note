<template>
    <div class="person">
        <h1>情况五：监视上述的多个数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button class="button" @click="changeName">修改名字</button>
        <button class="button" @click="changeAge">修改年龄</button>
        <button class="button" @click="changeC1">修改第一台车</button>
        <button class="button" @click="changeC2">修改第二台车</button>
        <button class="button" @click="changeCar">修改车</button>
    </div>
    
</template>



<script lang="ts" setup name="Person">
    import { reactive, watch } from 'vue'

    // 情况五：监视上述的多个数据
    let person = reactive({
        name: '张三',
        age: 18,
        car: {
            c1: '保时捷',
            c2: '宝马'
        }
    })
    function changeName() {
        person.name += "~"
    }
    function changeAge() {
        person.age += 1
    }
    function changeC1() {
        person.car.c1 = "奥迪"
    }
    function changeC2() {
        person.car.c2 = "大众"
    }
    function changeCar() {
        person.car = {
            c1: "法拉利",
            c2: "保时捷"
        }
    }

    // 监视，情况五：监视上述的多个数据
    watch([()=>person.name, ()=>person.car.c1],(newValue,oldValue)=>{
        console.log('person.car变化了',newValue,oldValue)
    },{deep:true})
    
    // watch([()=>person.name,person.car],(newValue,oldValue)=>{
    //     console.log('person.car变化了',newValue,oldValue)
    // },{deep:true})


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