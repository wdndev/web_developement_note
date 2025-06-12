<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"> <br>
        名：<input type="text" v-model="lastName"> <br>
        <button class="button" @click="changeFullName">修改全名</button> <br>
        全名：<span>{{fullName}}</span>
    </div>
    
</template>

<!-- <script lang="ts">
    export default {
        name: 'Person'
    }
</script> -->

<script lang="ts" setup name="Person">
    import { ref, computed } from 'vue'

    let firstName = ref('张')
    let lastName = ref('三')

    // 这么定义的计算属性，不能修改，只能读取
    // let fullName = computed(() => {
    //     return firstName.value + "-" + lastName.value
    // })

    // 创建一个计算属性，可以修改
    const fullName = computed({
        get() {
            return firstName.value + "-" + lastName.value
        },
        set(val) {
            console.log("修改了全名", val)
            const [str1, str2] = val.split("-")
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName() {
        console.log(fullName.value)
        fullName.value = "王-五"    // 计算属性 set 调用
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