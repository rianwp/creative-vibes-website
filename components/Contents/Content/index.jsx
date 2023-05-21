import { AiFillCalendar } from "react-icons/ai"
import { GoPerson } from "react-icons/go"
import TagBox from "../TagBox"
import Image from "next/image"

const MainContent = ({tanggal, img, alt, text, tags, author}) => {
  return (
    <div className="mt-5 w-full">
      <div className="flex flex-row items-center mb-2 flex-wrap">
        <div className="flex flex-row items-center space-x-2 text-gray-400 mr-2 mb-2 w-full sm:w-auto">
          <GoPerson/>
          <div>{author}</div>
        </div>
        <div className="flex flex-row items-center space-x-2 text-gray-400 mr-2 mb-2 w-full sm:w-auto">
          <AiFillCalendar/>
          <div>{tanggal}</div>
        </div>
      </div>
      <div className="flex flex-row items-center mb-2 flex-wrap">
        {tags.map((tag)=>
          <div key={tag.id} className="mr-2 mb-2">
            <TagBox>{tag.name}</TagBox>
          </div> 
        )}
      </div>
      <div className="w-full aspect-video rounded-lg overflow-hidden mb-5">
        <Image priority={true} alt={alt} src={img} className="w-full object-cover object-center" referrerPolicy="no-referrer"/>
      </div>
      <div className="text-justify wordpress leading-loose break-words" dangerouslySetInnerHTML={{__html: text}}/>
    </div>
  )
}

export default MainContent
