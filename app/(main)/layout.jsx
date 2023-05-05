import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react"
import ProgressBar from "@/components/ProgressBar"

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