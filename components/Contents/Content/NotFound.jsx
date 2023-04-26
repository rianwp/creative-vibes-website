import { RiArticleLine } from "react-icons/ri"

const NotFound = () => {
  return (
    <div className="-mt-14 w-full h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <RiArticleLine className="w-32 h-32 text-gray-400"/>
        <div className="text-xl font-semibold text-gray-400">
          Artikel Yang Anda Cari Tidak Ditemukan
        </div>
      </div>
    </div>
  )
}

export default NotFound