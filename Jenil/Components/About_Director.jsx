import Image from 'next/image'
import React from 'react'

const About_Director = () => {
  return (
    <div className='w-full h-screen mt-28 flex flex-row justify-center '>
      <div className='w-1/2 h-full p-10 flex flex-col justify-center'>
        <Image src={"/director.png"} className='self-center' width={450} height={550} alt='Director of IIITV'/>
      </div>
      <div className='w-1/2 h-full p-10 flex flex-col justify-center'>
      <p className='text-xl -ml-10'>"Welcome to IIIT Vadodara, where innovation meets excellence. Our institution is dedicated to inspiring personal growth and driving societal advancement through high-quality education. At IIIT Vadodara, we aim to harness the potential of our students, guiding them to become leaders and lifelong learners who contribute to national growth. We emphasize people-centric leadership, rooted in diversity, equality, and inclusion, with ethical standards at the core of our mission. Join us in a journey rich with learning and discovery, and become part of a community committed to excellence and impact. Together, let’s build a brighter future." </p>
      <p>Dr. Dharmendra Singh</p>
            </div>
      
    </div>
  )
}

export default About_Director
