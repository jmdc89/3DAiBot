import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TextToSpeech } from '@/components/TextToSpeech'
import ChatBotCanvas from '@/components/ChatBotCanvas'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen'>
      <TextToSpeech />
      < ChatBotCanvas />
    </main>
  )
}
