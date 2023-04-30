"use client"

import { usePathname } from "next/navigation"
import { setGlobalState, useGlobalState } from "@/utils/state"
import { useEffect, useRef } from "react"
import nProgress from "nprogress"

const ProgressBar = () => {
  const [ isRouterChangeStart, setIsRouterChangeStart ] = useGlobalState("isRouterChangeStart")
  const pathname = usePathname()
  const isMounted = useRef(false)
  nProgress.configure({showSpinner:false})
  useEffect(() => {
    if(isMounted.current){
      if(isRouterChangeStart === true){
        nProgress.set(0.0)
        nProgress.set(0.4)
      } else{
        nProgress.set(1)
      }
    } else{
      isMounted.current = true
    }
  }, [isRouterChangeStart])
  
  useEffect(() => {
    if(isMounted.current){
      setGlobalState("isRouterChangeStart", false)
    } else{
      isMounted.current = true
    }
    
  },[pathname])
  return ( 
    <></>
  )
}

export default ProgressBar