import { AiFillCalendar } from "react-icons/ai"

const MainContent = ({tanggal, img, alt, text}) => {
  return (
    <div className="mt-5 w-full">
      <div className="flex flex-row items-center space-x-2 mb-2 text-gray-400">
        <AiFillCalendar/>
        <div>{tanggal}</div>
      </div>
      <div className="w-full aspect-video rounded-lg overflow-hidden mb-5">
        <img src={img} alt={alt} className="w-full object-cover object-center" referrerPolicy="no-referrer"/>
      </div>
      <div className="text-justify wordpress" dangerouslySetInnerHTML={{__html: text}}/>
    </div>
  )
}

export default MainContent