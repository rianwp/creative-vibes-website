"use client"

import { useRef, useState, use } from "react"
import InputBox from "./InputBox"
import validateEmail from "@/utils/validateEmail"
import { usePathname, useRouter } from "next/navigation"

const CommentInput = () => {
  const [validEmail, setValidEmail] = useState(true)
  const [validNama, setValidNama] = useState(true)
  const email = useRef(null)
  const nama = useRef(null)
  const comment = useRef(null)
  const path = usePathname()
  const router = useRouter()
  
  const onSubmitHandler = async (event) => {
    event.preventDefault()
    if(email.current.value === ""){
      setValidEmail(false)
    } else{
      setValidEmail(true)
    }

    if(!validateEmail(email.current.value)){
      setValidEmail(false)
    } else{
      setValidEmail(true)
    }

    if(nama.current.value === ""){
      setValidNama(false)
    } else{
      setValidNama(true)
    }

    if(validEmail && validNama){
      const data = {
        post: path.split("/")[2],
        author_email: email.current.value,
        author_name: nama.current.value,
        content: comment.current.value
      }
      try {
        await fetch("https://creativevibesid.000webhostapp.com/wp-json/wp/v2/comments", { 
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        router.refresh()
      } catch (error) {
        
      }
      
    }
  }
  return (
    <form onSubmit={onSubmitHandler} className="w-full mt-5 flex flex-col space-y-4">
      <div className="text-black font-semibold mb-2 text-xl">Tulis Komentar Anda</div>
      <InputBox isError={!validEmail} errorMsg="Email tidak valid" label="Email" placeholder="Silahkan masukan email" ref={email}/>
      <InputBox isError={!validNama} errorMsg="Nama tidak boleh kosong" label="Nama" placeholder="Silahkan masukan nama" ref={nama}/>
      <InputBox textarea={true} label="Comment" placeholder="Silahkan tuliskan komentar anda" ref={comment}/>
      <div className="self-end">
        <button type="submit" className="text-base block mt-5 py-1.5 px-4 bg-blue-500 hover:bg-blue-600 transition duration-300 text-white rounded-lg">Post</button>
      </div>
    </form>
  )
}

export default CommentInput