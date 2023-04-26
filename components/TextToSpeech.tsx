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
            <button>Ask</button>
        </form>
    </div>
  )
}
