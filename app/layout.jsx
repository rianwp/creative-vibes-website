import Navbar from "@/components/Navbar"
import "./globals.css"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Creative Vibes",
  description: "Creative Vibes is the perfect place for youths to learn about design, multimedia, Photoshop and Illustrator to unleash their creativity. Join us and experience a unique learning experience.",
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