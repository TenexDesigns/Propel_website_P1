import Image from 'next/image'
import React from 'react'

function Card({imageUrl,title,description,paragraph}) {
  return (
    <div>
       <div className='md:h-96 md:max-w-full flex items-center flex-col justify-end  gap-24 mx-3 space-y-4 md:flex-row'>
<figure className='h-96 w-1/2'>
    <img src='/img/meat.jpg' alt='books'/>
</figure>

<div>
    <h1><span className='font-black text-3xl'>{title}</span> <span className='font-extralight text-gray-500'>{description}</span></h1>

    <p className='m '>{paragraph}</p>
    

</div>


       </div>


    </div>
  )
}

export default Card