import EmptyMemories from '@/components/EmptyMemories'
import Hero from '@/components/Hero'
import SignIn from '@/components/SignIn'
import Profile from '@/components/profile'
import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import Copyright from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = Bai_Jamjuree({ subsets: ['latin'], weight: '700', variable: '--font-jam-juree' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma capsula do tempo construída em Next.js, Tailwind, tal tal tal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const isAuthenticated = cookies().has('token');

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        <main className="grid grid-cols-2 min-h-screen ">
      {/* esquerda */}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"/>
        
        {/* linhas */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"/>
        
        {isAuthenticated? <Profile /> : <SignIn /> }
        <Hero />
        <Copyright />

      </div>

      {/* direita */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {children}
      </div>
    </main>
      </body>
    </html>
  )
}
