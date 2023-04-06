"use client"

import { useEffect, useState } from "react"


const Hero = () => {
  const getWindowSize = () => {
    const {innerWidth, innerHeight} = window
    return {innerWidth, innerHeight}
  }

  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [isFullscreen, setIsFullscreen] = useState(getWindowSize().innerWidth > getWindowSize().innerHeight)


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  },[])

  useEffect(() => {
    if(windowSize.innerWidth >= windowSize.innerHeight){
      setIsFullscreen(true)
    } else{
      setIsFullscreen(false)
    }
  },[windowSize])

  const fullscreen = isFullscreen ? "h-screen" : "hero-responsive"
  
  return (
    <div className={`-mt-14 w-full ${fullscreen} bg-gradient-to-br from-cyan-400 via-purple-600 to-pink-600 flex flex-col items-center justify-center`}>
      <img src="/img/creativevibes.png" alt="Creative Vibes" className="md:h-40 sm:h-32 h-24 object-contain mb-5"/>
      <div className="text-white lg:text-xl md:text-lg sm:text-base text-sm text-center">Creativity with youth vibe, place for learning design for free</div>
    </div>
  )
}

export default Hero