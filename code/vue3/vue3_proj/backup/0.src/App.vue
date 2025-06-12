<script lang="ts">
import {defineComponent, ref, reactive, computed} from 'vue'
interface Person {
  name: string;
  age: number;
}
export default defineComponent({
  name: 'App',
  setup() {
    const count = ref<string | number>(0)
    const user: Person = reactive({
      name: 'zhangsan',
      age: 8
    })
    const buttonStatus = computed(() => {
      return {
        text: user.age >= 10 ? "可以参加" : "未满10岁，不可以参加",
        disable: user.age < 10
      }
    })

    const increase = () => {
      if (typeof count.value === 'number') {
        count.value++
      }
      user.age++
    }
    const deincrease = () => {
      if (typeof count.value === 'number') {
        count.value--
      }
      user.age--
    }

    return {
      count,
      increase,
      deincrease,
      user,
      buttonStatus
    }
  }
})

</script>

<template>
  <div>
    <h1>{{ count }}</h1>
    <h1>{{ user.age }}</h1>
    <button type="button" @click="increase">increase</button>
    <button type="button" @click="deincrease">decrease</button>
    <button type="button" :disabled=buttonStatus.disable>
      {{ buttonStatus.text }}
    </button>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
