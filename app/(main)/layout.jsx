import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react"
import ProgressBar from "@/components/ProgressBar"

export const revalidate = 3600

const Layout = ({ children }) => {
  return (  
    <>
      <ProgressBar/>
      <Navbar/>
      <main>
        {children}
        <Analytics/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout