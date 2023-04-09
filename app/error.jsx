"use client"
const Error = ({error, reset}) => {
  return (
    <div className="w-full -mt-14 landscape:h-screen hero-responsive flex items-center justify-center bg-gray-100">
      <div className="flex-col flex">
        <div className="text-5xl font-extrabold">Terjadi kesalahan</div>
        <div className="self-end">
          <button className="bg-red-500 text-white hover:bg-red-600 transition duration-300 block py-2 px-3 rounded-lg" onClick={() => reset()} >
            Try again
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error