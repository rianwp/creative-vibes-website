const CommentBox = ({img, nama, comment, tanggal}) => {
  return (
    <div className="w-full flex flex-row items-start sm:space-x-4 space-x-0">
      <div className="w-32 aspect-square rounded-full overflow-hidden hidden sm:block">
        <img className="w-full object-cover object-center" src={img} alt={nama}/>
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-between items-center mb-2 flex-wrap">
          <div className="text-base font-semibold text-black">{nama}</div>
          <div className="text-sm text-gray-400">{tanggal}</div>
        </div>
        <div className="text-sm text-black text-justify" dangerouslySetInnerHTML={{__html: comment}}/>
      </div>
    </div>
  )
}

export default CommentBox