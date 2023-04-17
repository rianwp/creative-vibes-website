import { AiFillCalendar } from "react-icons/ai"
import TagBox from "../TagBox"

const MainContent = ({tanggal, img, alt, text, tags}) => {
  return (
    <div className="mt-5 w-full">
      <div className="flex flex-row items-center space-x-2 mb-2 flex-wrap">
        <div className="flex flex-row items-center space-x-2 text-gray-400">
          <AiFillCalendar/>
          <div>{tanggal}</div>
        </div>
        {tags.map((tag)=>
          <TagBox key={tag.id}>{tag.name}</TagBox> 
        )}
      </div>
      <div className="w-full aspect-video rounded-lg overflow-hidden mb-5">
        <img src={img} alt={alt} className="w-full object-cover object-center" referrerPolicy="no-referrer"/>
      </div>
      <div className="text-justify wordpress leading-loose" dangerouslySetInnerHTML={{__html: text}}/>
    </div>
  )
}

export default MainContent