"use client"

import { useState } from "react"
import NavItem from "./NavItem"
import { usePathname } from "next/navigation"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import Image from "next/image"

const Navbar = () => {
  const pathname = usePathname()
  const [transition, setTransition] = useState(true)
  const transparent = transition ? "bg-transparent shadow-none text-white" : "bg-white shadow-xl text-black"
  useScrollPosition(({ prevPos, currPos }) => {
    if(currPos.y == 0){
      setTransition(true)
    } else {
      setTransition(false)
    }
  })
  return (
    <nav className={`sticky top-0 w-full ${pathname == "/" ? transparent : "bg-white shadow-xl text-black"} flex justify-between sm:px-8 px-4 h-14 items-center transition duration-300 z-10`}>
      <a href="/">
        <Image src="/img/logo.png" alt="Logo" className="h-9 w-9"/>
      </a>
      <div className="flex items-center md:space-x-4 space-x-2">
        <NavItem href="/contents">Contents</NavItem>
        <NavItem href="/#about">About</NavItem>
        <NavItem href="/#team">Team</NavItem>
      </div>
    </nav>
  )
}

export default Navbar
