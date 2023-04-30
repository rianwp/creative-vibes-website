import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Analytics } from "@vercel/analytics/react"
import ProgressBar from "@/components/ProgressBar"

const Layout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-poppins">
        <ProgressBar/>
        <Navbar/>
        <main>
          {children}
          <Analytics/>
        </main>
        <Footer/>
      </body>
    </html>
  )
}

export default Layout