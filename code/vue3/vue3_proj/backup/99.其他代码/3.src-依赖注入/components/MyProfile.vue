<template>
    <div class="profile-component">
        <HelloWorld msg="Profile Component" />
        <h1>Name: {{user.name}}</h1>
        <h1 v-if="!isHidden">Age: {{user.age}}</h1>
        <h1 v-if="!isHidden">DoubleAge: {{doubleAge}}</h1>
        <button type="button" @click="toggleHide">{{ isHidden ? '显示' : '隐藏'}}</button>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue'
    import HelloWorld from './HelloWorld.vue';
    // import type {IPerson, IEvents} from '@/types'
    // import type { IPerson, IEvents } from "@/types"
    export interface IPerson {
        user?: {
            name: string;
            age: number;
        }
    }

    export interface IEvents {
        (e: 'change', hidden: boolean): void
    }

    // console.log('MyProfile', IPerson)

    const props = withDefaults(defineProps<IPerson>(), {
        user: () => ({name: 'zhangsan', age: 18})
    })
    const emit = defineEmits<IEvents>()
    const isHidden = ref(false)
    const doubleAge = computed(() => props.user.age * 2)

    const toggleHide = () => {
        isHidden.value = !isHidden.value
        emit('change', isHidden.value)
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>