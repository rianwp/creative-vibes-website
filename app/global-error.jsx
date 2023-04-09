"use client"
import { useEffect } from "react"

const GlobalError = ({error, reset}) => {
  useEffect(() => {
    console.error(error)
  }, [error])
  return (
    <html>
      <body className="w-full bg-gray-100">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="flex-col flex">
            <div className="text-3xl">Terjadi kesalahan</div>
            <div className="self-end">
              <button className="bg-red-500 text-white hover:bg-red-600 transition duration-300 block" onClick={() => reset()} >
                Try again
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
    
  )
}

export default GlobalError