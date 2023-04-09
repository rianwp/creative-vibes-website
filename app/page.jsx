import About from "@/components/Landing/About"
import Hero from "@/components/Landing/Hero"
import Team from "@/components/Landing/Team"

const Home = () => {
  return(
    <div className="w-full">
      <Hero/>
      <About/>
      <Team/>
    </div>
  )
}

export default Home