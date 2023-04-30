import "./globals.css"
import "nprogress/nprogress.css"

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-poppins">
        {children}
      </body>
    </html>
  )
}

export default RootLayout