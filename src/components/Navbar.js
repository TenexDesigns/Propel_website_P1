import React from 'react'
import { HiMenu } from "react-icons/hi";


function Navbar() {
  return (
    <div>
        <div className='flex flex-row bg-transparent p-5 items-center'>
            <span className='flex-1 text-green-500 text-3xl'>Spoon</span>

            <HiMenu className=' fill-green-500  text-3xl'/>

            
            
            </div>


    </div>
  )
}

export default Navbar