'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineLink} from 'react-icons/ai'
import axios, { AxiosResponse } from 'axios'
import { useRouter } from 'next/navigation'
type Props = {}

const Homepage = (props: Props) => {
    const route = useRouter()
    const handleClick = async()=>{
        const res:AxiosResponse<any> = await axios.get('/api/chats')
        const chatsId = res.data
        console.log(chatsId);
        
        route.push(`/chats/${chatsId}`)
        console.log(res);
    }

  return (
    <div className='flex justify-center items-center flex-col gap-4 h-full'>
        <h1 className='text-4xl font-semibold'>ChatGPT</h1>
        <div className='flex flex-col items-center text-xl justify-center'>
            <Image src='/wechat.png' alt='wechat' width={150} height={150}/>
            <p>开发不易,合理打赏☺</p>

            <Link href={'https://www.pejoyjin.xyz'} className='flex items-center gap-2 mt-4 border-[1px] border-black px-4 py-1'>
                <p className='text-sm'>
                    链接
                </p>
                <AiOutlineLink size={15}/>
            </Link>

        </div>
        
        <p className='text-sm w-9/12 text-center'>
            国内节点调取GPT的api速度有点慢，请耐心等待...
        </p>
        
      
        <button onClick={handleClick}
                className='bg-sky-400 text-white text-center hover:scale-110 transition
                            px-4 py-2 rounded-md '>
            开始聊天
        </button>
     

        
    </div>
  )
}

export default Homepage