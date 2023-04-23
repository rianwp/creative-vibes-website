import TagBox from "./TagBox"

const ContentBox = ({img, href, judul, tanggal, tags}) => {
  return (
    <div className="md:w-1/3 sm:w-1/2 w-full sm:p-8 p-4 h-full">
      <a href={href}>
        <div className="rounded-lg shadow-xl w-full overflow-hidden transition duration-300 hover:bg-gray-100 h-full">
          <div className="w-full aspect-video">
            <img src={img} alt={judul} className="w-full object-cover object-center" referrerPolicy="no-referrer"/>
          </div>
          <div className="w-full p-4">
            <div className="line-clamp-1 text-base font-semibold text-black mb-1 h-6">{judul}</div>
            <div className="line-clamp-1 text-sm text-gray-400 h-5 mb-1">{tanggal}</div>
            <div className="flex flex-row flex-wrap text-sm">
              {tags.map((tag)=>
                <div key={tag.id} className="mr-0.5 mb-0.5">
                  <TagBox>{tag.name}</TagBox>
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default ContentBox