import { Poppins } from 'next/font/google'
import './globals.css'
// import Header from '@/components/ui/header'
// import Footer from '@/components/ui/footer'
// import HomePage from './Homepage/page'

const poppins = Poppins({ subsets: ['devanagari'],weight:['400'] })

export const metadata = {
  title: 'SnapshortURL',
  description: 'Streamlined URL Shortening for the Modern Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Header /> */}
        
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
