import type { Metadata } from 'next'
import { Inter, Vina_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import MyHome from './components/home/myHome'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <h1>cinemapp</h1>
      <Navbar></Navbar>
      <MyHome></MyHome>
      {children}
      </body>
    </html>
  )
}
