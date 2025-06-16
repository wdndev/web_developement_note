// 钩子函数

import { ref, onMounted, onUnmounted } from "vue"

export default function() { 
    const x = ref(0)
    const y = ref(0)
    const updateMouse = (e: MouseEvent) => {
        // x.value = e.clientX
        // y.value = e.clientY
        x.value = e.pageX
        y.value = e.pageY
    }

    // 监听鼠标位置
    onMounted(()=>{
        window.addEventListener('click', updateMouse)
    })
    onUnmounted(()=>{
        window.removeEventListener('click', updateMouse)
    })

    return {  x, y }
}