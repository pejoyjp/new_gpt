import useSWR from 'swr'
import fetcher from '../libs/fetcher'
const useCurrentTime =  (chatsId:string) => {
    const url =  `/api/chats/${chatsId}`
    const {data,error,isLoading,mutate} = useSWR(url,fetcher)
    
    return {
        data,error,isLoading,mutate
    }
}
export default useCurrentTime