import React from 'react'
import Image from 'next/image'
type Props = {
    src:string
    alt:string

}

const Avatar:React.FC<Props> = ({src,alt}) => {
  return (
    <Image src={src} alt={alt} height={30} width={30} className='rounded-full'/>
  )
}

export default Avatar