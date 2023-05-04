import Image from "next/image"

const Member = ({name, deskripsi, img}) => {
  return (
    <div className="md:w-1/3 sm:w-1/2 w-full sm:p-8 p-4 h-full">
      <div className="rounded-full overflow-hidden w-32 h-32 mx-auto shadow-xl">
        {
          img === "" || !img ? 
          <Image priority={true} src="/img/person.png" alt={name} className="object-cover object-center w-full"/>
          :
          <Image priority={true} src={img} alt={name} className="object-cover object-center w-full"/>
        }
      </div>
      <div className="text-center mt-5">
        <div className="font-semibold text-xl text-black">{name}</div>
        <div className="font-normal text-base text-black">{deskripsi}</div>
      </div>
    </div>
  )
}

export default Member