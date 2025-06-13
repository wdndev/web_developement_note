<template>
    <div class="person">
        <h1>需求：水温达到60℃，或水位达到80cm，则联系服务器</h1>
        <h2>当前水温：{{ temp }} ℃</h2>
        <h2>当前水位：{{ height }} cm</h2>
        <button class="button" @click="changeTemp">水温+10</button>
        <button class="button" @click="changeHeight">水位+10</button>
    </div>
    
</template>



<script lang="ts" setup name="Person">
    import { ref, watch, watchEffect } from 'vue'

    let temp = ref(10)
    let height = ref(0)

    function changeTemp() {
        temp.value += 10
    }
    function changeHeight() {
        height.value += 10
    }

    // // 监视
    // // 用watch实现，需要明确的指出要监视：temp、height
    // watch([temp, height], (value) => {
    //     // console.log(value)
    //     let [newTemp, newHeight] = value
    //     if (newTemp >= 60 || newHeight >= 80) {
    //         alert('给服务器发请求')
    //         temp.value = 0
    //         height.value = 0
    //     }
    // })

    // 用watchEffect实现，不用
    watchEffect(() => {
        if (temp.value >= 60 || height.value >= 80) {
            alert('给服务器发请求')
            temp.value = 0
            height.value = 0
        }
    })


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