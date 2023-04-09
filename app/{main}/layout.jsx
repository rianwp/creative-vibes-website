import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const Layout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-poppins">
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

export default Layout