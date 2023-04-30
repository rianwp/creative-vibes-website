"use client"

import Image from "next/image"
import TagBox from "./TagBox"
import { useRef } from "react"
import { useDraggable } from "react-use-draggable-scroll"
import Link from "next/link"
import { setRouterChange } from "@/utils/state"
import { usePathname } from "next/navigation"

const ContentBox = ({img, href, judul, tanggal, tags}) => {
  const pathname = usePathname()
  const slider = useRef()
  const { events } = useDraggable(slider, {
    applyRubberBandEffect: true,
  })
  return (
    <div className="md:w-1/3 sm:w-1/2 w-full sm:p-8 p-4 h-full" >
      <div className="rounded-lg shadow-xl w-full overflow-hidden h-full">
        <Link onClick={() => setRouterChange(pathname, href)}href={href} className="w-full aspect-video">
          <Image src={img} alt={judul} className="w-full object-cover object-center hover:scale-110 transition duration-300" referrerPolicy="no-referrer"/>
        </Link>
        <div className="w-full pt-4 px-4">
          <Link onClick={() => setRouterChange(pathname, href)} href={href} className="line-clamp-1 text-base font-semibold text-black mb-1 h-6 hover:text-blue-400 transition duration-300">{judul}</Link>
          <div className="line-clamp-1 text-sm text-gray-400 h-5 mb-1">{tanggal}</div>
        </div>
        <div className="pb-4 px-4 cursor-pointer">
          <div className="flex flex-row flex-nowrap text-sm overflow-x-scroll scrollbar-hide" ref={slider} {...events}>
            {tags.map((tag)=>
              <div key={tag.id} className="mr-0.5 mb-0.5 select-none">
                <TagBox>{tag.name}</TagBox>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentBox