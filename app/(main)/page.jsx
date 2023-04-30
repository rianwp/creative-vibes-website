import About from "@/components/Landing/About"
import Hero from "@/components/Landing/Hero"
import Team from "@/components/Landing/Team"
import ProgressBar from "@/components/ProgressBar"

export const metadata = {
  title: "Creative Vibes",
  description: "creativevibesid | creativevibesid.com | Creative Vibes is the perfect place for youths to learn about design, multimedia, Photoshop and Illustrator to unleash their creativity. Join us and experience a unique learning experience.",
}

const Home = () => {
  return(
    <div className="w-full">
      <ProgressBar/>
      <Hero/>
      <About/>
      <Team/>
    </div>
  )
}

export default Home