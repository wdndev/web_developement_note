
import { toRefs, reactive } from 'vue'
import axios from 'axios'

interface IResult<T> {
    result: null | T;
    loading: boolean;
    error: null | T
}
export default function <T = any>(url: string) {
    const data:IResult<T> = reactive({
        result: null,
        loading: true,
        error: null
    })

    axios.get(url).then(res => {
        data.result = res.data
    }).catch(err => {
        data.error = err
    }).finally(() => { 
        data.loading = false
    })

    return  toRefs(data) 
}