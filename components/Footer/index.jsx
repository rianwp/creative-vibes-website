"use client"

import { usePathname } from "next/navigation"
import FooterItem from "./FooterItem"
import FooterTitle from "./FooterTitle"
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { setRouterChange } from "@/utils/state"


const Footer = () => {
  const pathname = usePathname()
  return (
    <footer className="w-full bg-gray-800">
      <div className=" py-12 sm:w-4/5 w-full mx-auto sm:px-8 px-4 flex flex-row flex-wrap">
        <div className="md:w-1/3 sm:w-1/2 w-full flex flex-col space-y-2 md:py-0 sm:py-4 py-4 px-4">
          <FooterTitle>Navigate</FooterTitle>
          <FooterItem onClick={() => setRouterChange(pathname, "/contents")} href="/contents">Contents</FooterItem>
          <FooterItem onClick={() => setRouterChange(pathname, "/")} href="/#about">About</FooterItem>
          <FooterItem onClick={() => setRouterChange(pathname, "/")} href="/#team">Team</FooterItem>
          
        </div>
        <div className="md:w-1/3 sm:w-1/2 w-full flex flex-col space-y-2 md:py-0 sm;py-4 py-4 px-4">
          <FooterTitle>Contact Us</FooterTitle>
          <FooterItem>
            <MdEmail className="w-5 h-5"/>
            <p>vibescreative05@gmail.com</p>
          </FooterItem>
        </div>
        <div className="md:w-1/3 sm:w-1/2 w-full flex flex-col space-y-2 md:py-0 sm:py-4 py-4 px-4">
          <FooterTitle>Social Media</FooterTitle>
          <FooterItem target="_blank" href="https://www.youtube.com/@creativevibes_id/channels">
            <FaYoutube className="w-5 h-5"/>
            <p>Creative Vibes</p>
          </FooterItem>
          <FooterItem target="_blank" href="https://www.instagram.com/creative.vibesid/">
            <FaInstagram className="w-5 h-5"/>
            <p>@creative.vibesid</p>
          </FooterItem>
          <FooterItem target="_blank" href="https://www.tiktok.com/@creativevibes05">
            <FaTiktok className="w-5 h-5"/>
            <p>@creativevibes05</p>
          </FooterItem>
        </div>
      </div>
    </footer>
  )
}

export default Footer