'use client'

import React, {useState} from 'react'

export const TextToSpeech = () => {

    const [userText, setUserText] = useState("")
    const [isLoading, setIsLoading] = useState(false)

  return (
    <div className='flex justify-center top-0 z-50'>
        <form className='flex fixed mx-auto bottom-2 space-x-2 pt-2'>
            <input
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
                className='bg-transparent w-[300px] sm:w-[500px] xs:w-[250px] border border-[#b00c3f]/80 outline-none rounded-lg placeholder:text-[#b00c3f] p-2 text-[#b00c3f]'
                type="text"
                placeholder="What do you want to know..."
            />
            <button className='text-[#b00c3f] p-2 border border-[#b00c3f] rounded-lg disabled:text-blue-100 disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:text-black hover:bg-[#b00c3f] duration-300 transition-all'>Ask</button>
        </form>
    </div>
  )
}
