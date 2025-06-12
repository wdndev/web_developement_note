<template>
    <div class="person">
        <h1>情况一：监视ref定义的【基本类型】数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button class="button" @click="changeSum">点击加一</button>
        <br>
        <h1>情况二：监视ref定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button class="button" @click="changeName">修改名字</button>
        <button class="button" @click="changeAge">修改年龄</button>
        <button class="button" @click="changePerson">修改整个人</button>
    </div>
    
</template>



<script lang="ts" setup name="Person">
    import { ref, watch } from 'vue'

    let sum = ref(0)
    function changeSum() {
        sum.value++
    }
    // 监视，情况一：监视【ref】定义的【基本类型】数据
    const stopWatch = watch(sum, (newValue, oldValue)=>{
        console.log('sum被修改了', newValue, oldValue)
        if (sum.value > 10) {
            stopWatch()
        }
    })
    

    // 监视，情况二：监视【ref】定义的【对象类型】数据
    let person = ref({
        name: '张三',
        age: 18
    })
    function changeName() {
        person.value.name += '~'
    }
    function changeAge() {
        person.value.age += 1
    }
    function changePerson() {
        person.value = {
            name: '王五',
            age: 20
        }
    }
    // 监视，情况二：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    // watch的第一个参数是：被监视的数据
    // watch的第二个参数是：监视的回调
    // watch的第三个参数是：配置对象（deep、immediate等等.....）
    watch(person, (newValue, oldValue)=>{
        console.log('person被修改了', newValue, oldValue)
    }, {deep: true})


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