'use client'
import React, { useCallback, useEffect, useState } from 'react'
import ChatItem from './ChatItem'
import {BsSend} from 'react-icons/bs'
import axios from 'axios'
import { useParams } from 'next/navigation'
import useCurrentTime from '../../../hooks/useCurrentTime'
import { toast } from 'react-hot-toast'


type Props = {}
const START = '😅 ! 我是GPT，您可以开始问问题了！'

const Chat = (props: Props) => {
  const [value,setValue] = useState<string>('')
  const [question,setQuestion] = useState<string>('')
  const [questionTime,setQuestionTime] = useState<string>('')
  const [isAnswerLoading,setIsAnswerLoading] = useState<boolean>(true)

  const [chats, setChats] = useState<Array<{ chat?: string; isUser?: boolean; 
                                            time?: string; isLoading?:boolean }>>([]);

  const chatsId = useParams().chatsId
  const {data:currentTime,isLoading:isTimeLoading}:any = useCurrentTime(chatsId)

  useEffect(() => {
    setQuestionTime(new Date().toLocaleTimeString('en-US'))
  }, [questionTime]);

  
  const handleSubmit = useCallback(async()=>{
    if(value === ""){
      toast.error('您还没有输入捏')
    }else{
      const tempValue = value
      setQuestion(value)
      setValue('')
      setQuestionTime(new Date().toLocaleTimeString('en-US'))
      setIsAnswerLoading(true)

      setChats((prevChats) => [
        ...prevChats,
        { chat: tempValue, isUser: true, time: new Date().toLocaleTimeString('en-US'), isLoading: false },
      ]);
      
      setChats((prevChats) => [
        ...prevChats,
        { isUser: false,isLoading:true },
      ]);

      const res = await axios.post('/api/chat',{
        question:tempValue,
        time:questionTime,
        chatsId:chatsId
      })
      
      setIsAnswerLoading(false)

      const {answer,serverTime} = res.data
      
      setChats((prevChats) => {
        // 在这里修改第二个 setChats 中的值
        const newChats = [...prevChats];
        const lastChat = newChats[newChats.length - 1];
        lastChat.isLoading = false;
        lastChat.chat = answer
        lastChat.time = serverTime 
        return newChats;
      });
      
      
    }

  },[value, setValue, setIsAnswerLoading, setQuestion, setQuestionTime, chatsId, isAnswerLoading]);


  const handleEnter = (e:React.KeyboardEvent<HTMLTextAreaElement>)=>{
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }
  return (
    <div className='h-full flex-col flex justify-between w-full'>
      <div className='overflow-y-auto'>
        <ChatItem words={START} isLoading={isTimeLoading} time={currentTime}/>
  
        {  
          chats.map((item, idx) => (
            <ChatItem key={idx} words={item.chat} isUser={item.isUser} 
                      time={item.time?item.time : "正在获取信息"} isLoading={item.isLoading}/>
          ))
        }
      </div>
        
      <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        handleSubmit()
      }}
            className='flex w-full justify-center relative'>

              <textarea   value={value}
                      onKeyDown={handleEnter}
                      onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>setValue(e.target.value)}
                      className="w-full p-2 text-gray-700 border border-gray-400 
                                  rounded-lg resize fixed bottom-0"
              />
          
          <button type='button'
                  onClick={handleSubmit}
                  className='absolute right-1 bottom-1 hover:text-green-800'>
              <BsSend/>
          </button>
      </form>
    </div>
  )
}

export default Chat