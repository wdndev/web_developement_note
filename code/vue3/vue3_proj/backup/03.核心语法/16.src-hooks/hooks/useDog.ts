import { reactive, onMounted} from 'vue'
import axios from 'axios'

export default function() {
    // 数据
    const dogList = reactive<string[]>([])

    // 方法
    async function getDog() {
        // axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
        //     dogList.push(res.data.message)
        // })
        try {
            const result = await  axios.get('https://dog.ceo/api/breeds/image/random')
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
        
    }

    onMounted(() => {
        getDog()
    })

    // 向外部提供数据
    return { dogList, getDog }
}