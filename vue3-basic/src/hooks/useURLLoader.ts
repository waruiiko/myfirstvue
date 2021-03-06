import {ref} from 'vue'
import axios from 'axios'

function useURLLoader(url: string){
    const result = ref(null)
    const loading = ref(true)
    const loaded = ref(false)
    const error = ref(null)
    
    axios.get(url).then((rawData) => {
        loading.value = false;
        loaded.value = true;
        result.value = rawData.data
    }).catch((error) => {
        error.value = error
        loading.value = false
    })

    return {
        result,
        loading,
        loaded,
        error
    }
}

export default useURLLoader