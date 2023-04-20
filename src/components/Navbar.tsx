import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Avatar from './Avatar'
import Link from 'next/link'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='h-12 w-full flex justify-between items-center 
                     bg-slate-50 text-lg font-semibold shadow-md px-2'>
    
        <Link href={'/'} className='flex items-center gap-2'>
          <Avatar src='/gpt.png' alt='gpt'/>
          <p>
              ChatGPT 
          </p>
        </Link>
     
        <div>
            <AiOutlineSearch size={25}/>
        </div>
    </div>
  )
}

export default Navbar