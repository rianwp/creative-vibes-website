"use client"

import { useState } from "react"
import NavItem from "./NavItem"
import { usePathname } from "next/navigation"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

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
    <nav className={`sticky top-0 w-full ${pathname == "/" ? transparent : "bg-white shadow-xl text-black"} flex justify-between md:px-8 sm:px-4 px-2 h-14 items-center transition duration-300`}>
      <img src="/img/" alt="Logo" className="h-9 w-9"/>
      <div className="flex items-center md:space-x-4 space-x-2">
        <NavItem href="#">Contents</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Members</NavItem>
      </div>
    </nav>
  )
}

export default Navbar
