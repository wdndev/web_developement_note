import { ref, onMounted} from 'vue'

export default function() { 


    const sum = ref(0)
    const increment = ()=>{
        sum.value += 1
    }
    const decrement = ()=>{
        sum.value -= 1
    }
    onMounted(()=>{
        increment()
    })

    // 向外部提供数据
    return { sum, increment,decrement }
}
