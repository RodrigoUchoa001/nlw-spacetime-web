import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'

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
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
