const Member = ({name, deskripsi, img}) => {
  return (
    <div className="md:w-1/3 sm:w-1/2 w-full sm:p-8 p-4 h-full">
      <div className="rounded-full overflow-hidden w-32 h-32 mx-auto shadow-xl">
        <img src={img} alt={name} className="object-cover object-center"/>
      </div>
      <div className="text-center mt-5">
        <div className="font-semibold text-xl text-black">{name}</div>
        <div className="font-normal text-base text-black">{deskripsi}</div>
      </div>
    </div>
  )
}

export default Member