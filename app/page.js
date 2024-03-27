import Image from 'next/image'
import { Inter } from 'next/font/google'
import Loader from '@/components/loading'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-96 bg-green-300 w-screen'>
        <h1>Home</h1> 
        {/* <Loader /> */}
    </main>
  )
}
