import React from 'react'
import Avatar from '../Avatar'
import { ThreeDots } from 'react-loader-spinner'

type Props = {
    isUser?:boolean
    words?:string
    isLoading?:boolean
    time:string
}



const ChatItem:React.FC<Props> = ({isUser,words,isLoading,time}) => {
  return (
    <div className={`flex items-start gap-2 pt-2 ${isUser?'flex-row-reverse':''} `}>
        <Avatar src={`${isUser?'/user.jpeg':'/gpt.png'}`} alt='dog'/>
        <div className={`${isUser?'bg-green-300':'bg-gray-300'} max-w-[80%] rounded-md px-2 py-1`}>
            <div className='text-md'>
              {
                isLoading?  <ThreeDots 
                                width="80" 
                                height={30}
                                color="#4fa94d" 
                                ariaLabel="three-dots-loading"
                                visible={true}
                              />
                          :<p>{words}</p>
              }
            
            </div>
            
            <p className={`text-sm text-neutral-500 ${isUser?'':'text-end'}`}>
              {time}
            </p>
        </div>
    </div>  
  )
}

export default ChatItem