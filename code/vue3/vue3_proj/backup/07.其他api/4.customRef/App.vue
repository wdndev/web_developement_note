<template>
	<div class="app">
		<h2>{{ msg }}</h2>
		<input type="text" v-model="msg">
	</div>
</template>

<script setup lang="ts" name="App">
	import {ref, customRef} from 'vue'
	import useMsgRef from './useMsgRef'

	// 使用Vue提供的默认ref定义响应式数据，数据一变，页面就更新
	// let msg = ref('你好')

    // 使用vue提供的customRef定义响应式数据，数据一变，页面就更新
    let initValue = '你好'
    let msg = customRef((track, trigger) => { 
        return { 
            get() { 
                //告诉Vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新
                track() // 告诉Vue这个数据被读取了
                return initValue
            },
            set(value) {
                console.log("数据被修改了: ", value)
                initValue = value
                //通知Vue一下数据msg变化了
                trigger()
            }
        }
    })

	// 使用useMsgRef来定义一个响应式数据且有延迟效果
	// let {msg} = useMsgRef('你好',1000)

</script>

<style scoped>
	.app {
		background-color: #ddd;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 10px;
	}
	button {
		margin:0 5px;
	}
</style>