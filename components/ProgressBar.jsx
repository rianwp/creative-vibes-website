"use client"

import { usePathname } from "next/navigation"
import { setGlobalState, useGlobalState } from "@/utils/state"
import { useEffect } from "react"
import nProgress from "nprogress"

const ProgressBar = () => {
  const [ isRouterChangeStart, setIsRouterChangeStart ] = useGlobalState("isRouterChangeStart")
  const pathname = usePathname()
  nProgress.configure({showSpinner:false})
  useEffect(() => {
    if(isRouterChangeStart === true){
      nProgress.set(0.0)
      nProgress.set(0.4)
    } else{
      nProgress.set(1)
    }
  }, [isRouterChangeStart])
  
  useEffect(() => {
    setGlobalState("isRouterChangeStart", false)
  },[pathname])
  return ( 
    <></>
  )
}

export default ProgressBar