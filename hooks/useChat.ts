import useSWR from 'swr'
import fetcher from '../libs/fetcher'
const useChat =  (chatId:string) => {
    const url =  `/api/chat/${chatId}`
    const {data,error,isLoading,mutate} = useSWR(chatId?url:null,fetcher)
    
    return {
        data,error,isLoading,mutate
    }

}
export default useChat