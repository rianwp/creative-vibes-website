import Navbar from "@/components/Navbar"
import "./globals.css"
import Footer from "@/components/Footer"

const RootLayout = ({ children }) => {
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

export default RootLayout