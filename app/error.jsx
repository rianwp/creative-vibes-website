export const metadata = {
  title: "Error",
  description: "Creative Vibes is the perfect place for youths to learn about design, multimedia, Photoshop and Illustrator to unleash their creativity. Join us and experience a unique learning experience.",
}

const Error = ({error, reset}) => {
  return (
    <div className="w-full -mt-14 h-screen flex items-center justify-center bg-gray-100">
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