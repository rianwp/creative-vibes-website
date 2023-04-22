import { AiFillCalendar } from "react-icons/ai"
import TagBox from "../TagBox"

const MainContent = ({tanggal, img, alt, text, tags}) => {
  return (
    <div className="mt-5 w-full">
      <div className="flex flex-row items-center mb-2 flex-wrap">
        <div className="flex flex-row items-center space-x-2 text-gray-400 mr-2 mb-2">
          <AiFillCalendar/>
          <div>{tanggal}</div>
        </div>
        {tags.map((tag)=>
          <div key={tag.id} className="mr-2 mb-2">
            <TagBox>{tag.name}</TagBox>
          </div> 
        )}
      </div>
      <div className="w-full aspect-video rounded-lg overflow-hidden mb-5">
        <img alt={alt} src={img} className="w-full object-cover object-center" referrerPolicy="no-referrer"/>
      </div>
      <div className="text-justify wordpress leading-loose" dangerouslySetInnerHTML={{__html: text}}/>
    </div>
  )
}

export default MainContent
