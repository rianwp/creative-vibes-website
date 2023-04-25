import Image from "next/image"

const Hero = () => {
  return (
    <div className={`-mt-14 w-full landscape:h-screen hero-responsive bg-gradient-to-br from-cyan-300 via-purple-600 to-pink-600 flex flex-col items-center justify-center`}>
      <Image src="/img/creativevibes.png" alt="Creative Vibes" className="md:h-40 sm:h-32 h-24 object-contain mb-5"/>
      <div className="text-white lg:text-xl md:text-lg sm:text-base text-sm text-center">Creativity with youth vibe, place for learning design for free</div>
    </div>
  )
}

export default Hero