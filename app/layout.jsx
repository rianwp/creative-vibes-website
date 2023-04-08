import Navbar from "@/components/Navbar"
import "./globals.css"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Creative Vibes",
  description: "Creativity with youth vibe, place for learning design for free",
}

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