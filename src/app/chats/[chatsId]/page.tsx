import Chat from '@/components/chats/Chat'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-full p-2'>
        <Chat/>
    </div>
  )
}

export default page