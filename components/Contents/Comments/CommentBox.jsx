"use client"

import { useState } from "react"
import CommentInput from "./CommentInput"
import Image from "next/image"

const CommentBox = ({id, img, nama, comment, tanggal, withReplies, children, postId }) => {
  const [isReplyClicked, setIsReplyClicked] = useState(false)
  return (
    <div className="w-full flex flex-row items-start sm:space-x-4 space-x-0">
      <div className="w-24 aspect-square rounded-full overflow-hidden hidden sm:block">
        <Image className="w-full object-cover object-center" src={img} alt={nama}/>
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-between items-center mb-1 flex-wrap">
          <div className="text-base font-semibold text-black">{nama}</div>
          <div className="text-sm text-gray-400">{tanggal}</div>
        </div>
        <div className="text-base text-black text-justify" dangerouslySetInnerHTML={{__html: comment}}/>
        {withReplies ?
          <>
            <div className="my-1 flex flex-col space-y-1 items-start">
              <button onClick={() => setIsReplyClicked(!isReplyClicked)} className="text-blue-500 hover:text-blue-600 transition duration-300">Reply</button>
              {isReplyClicked ? <CommentInput parent={id} postId={postId}/> : null}
            </div>
            <div className="flex flex-col w-full">
              {children}
            </div>
          </>
          :
          null
        }
      </div>
    </div>
  )
}

export default CommentBox
