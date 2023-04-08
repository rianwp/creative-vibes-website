import SectionTitle from "../SectionTitle"
import SosmedLink from "./SosmedLink"
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa"

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="py-32 sm:w-1/2 w-full mx-auto sm:px-8 px-4">
        <SectionTitle>About</SectionTitle>
        <div className="mt-5 text-justify">
        Creative Vibes adalah keinginan sederhana yang kami lakukan. Memiliki dedikasi untuk memberikan informasi dan pengetahuan seputar kreativitas dalam desain, game, dan multimedia. Disini, Anda dapat menemukan sejumlah artikel, panduan, dan tutorial seperti topik desain, perkembangan informasi terbaru, dan banyak lagi. Kami juga memiliki sosial media yang menyajikan konten-konten menarik dan bermanfaat.
        </div>
        <div className="flex flex-row space-x-6 mt-10 w-full mx-auto items-end justify-center">
          <SosmedLink href="https://www.youtube.com/@creativevibes_id/channels"><FaYoutube className="w-7 h-7"/></SosmedLink>
          <SosmedLink href="https://www.instagram.com/creative.vibesid/"><FaInstagram className="w-7 h-7"/></SosmedLink>
          <SosmedLink href="https://www.tiktok.com/@creativevibes05"><FaTiktok className="w-7 h-7"/></SosmedLink>
        </div>
      </div>
    </div>
  )
}

export default About