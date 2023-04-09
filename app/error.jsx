"use client"
const Error = ({error, reset}) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="flex-col flex">
        <div className="text-3xl">Terjadi kesalahan</div>
        <div className="self-end">
          <button className="bg-red-500 text-white hover:bg-red-600 transition duration-300 block" onClick={() => reset()} >
            Try again
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error