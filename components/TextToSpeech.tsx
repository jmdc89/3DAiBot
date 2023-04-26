import React from 'react'

export const TextToSpeech = () => {
  return (
    <div>
        <form>
            <input
                className='bg-transparent w-[510px] border border-[#b00c3f]/80 outline-none rounded-lg placeholder:text-[#b00c3f] p-2 text-[#b00c3f]'
                type="text"
                placeholder="What do you want to know..."
            />
            <button className='text-[#b00c3f] p-2 border border-[#b00c3f] rounded-lg disabled:text-blue-100 disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:text-black hover:bg-[#b00c3f] duration-300 transition-all'>Ask</button>
        </form>
    </div>
  )
}
