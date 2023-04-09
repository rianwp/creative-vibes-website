"use client"

const Error = ({error, reset}) => {
  return (
    <div className="fixed top-0 w-full h-screen flex items-center justify-center bg-gray-100 z-30 overflow-hidden">
      <div className="flex-col flex">
        <div className="text-5xl font-extrabold mb-5">Terjadi kesalahan</div>
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