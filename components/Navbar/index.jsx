"use client"

import { useState } from "react"
import NavItem from "./NavItem"
import { usePathname } from "next/navigation"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import Image from "next/image"
import Link from "next/link"
import { setRouterChange } from "@/utils/state"

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
    <nav className={`sticky top-0 w-full ${pathname == "/" ? transparent : "bg-white shadow-xl text-black"} flex justify-between sm:px-8 px-4 h-14 items-center transition duration-300 z-50`}>
      <Link onClick={() => setRouterChange(pathname, "/")}  href="/">
        <Image priority={true} src="/img/logo.png" alt="Logo" className="h-9 w-9"/>
      </Link>
      <div className="flex items-center md:space-x-4 space-x-2">
        <NavItem onClick={() => setRouterChange(pathname, "/contents")}  href="/contents">Contents</NavItem>
        <NavItem onClick={() => setRouterChange(pathname, "/")} href="/#about">About</NavItem>
        <NavItem onClick={() => setRouterChange(pathname, "/")} href="/#team">Team</NavItem>
      </div>
    </nav>
  )
}

export default Navbar
