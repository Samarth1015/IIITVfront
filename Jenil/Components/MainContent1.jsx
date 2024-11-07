import Image from 'next/image'
import React from 'react'

const MainContent1 = () => {
  return (
   <div className='w-screen self-center h-full  flex flex-row-reverse justify-center'>
        <div className='w-[40em] h-fit py-10 '>
            <Image src={"/convocation.JPG"} className='w-[50em] hover:scale-105 transition-all duration-150 h-[35em] rounded-2xl' objectFit='cover' objectPosition='20% 10%' width={450} height={100} alt='Convocation 2024'/>
        </div>
        <p className='max-w-[8em] font-sans self-center text-[#003c5f] text-7xl font-extrabold'>Start Your Future Today</p>
   </div>
  )
}

export default MainContent1
