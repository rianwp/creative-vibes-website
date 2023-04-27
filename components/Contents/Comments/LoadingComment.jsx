const LoadingComment = () => {
  return (
    <>
      <div className="text-xl text-black font-semibold mb-5">Komentar</div>
      <div className="w-full flex flex-row items-start sm:space-x-4 space-x-0 animate-pulse">
        <div className="w-24 aspect-square rounded-full overflow-hidden hidden sm:block">
          <div className="w-full h-full object-cover object-center bg-gray-400" />
        </div>
        <div className="w-full">
          <div className="flex flex-row justify-between items-center mb-1 flex-wrap">
            <div className="bg-gray-400 h-5 w-16 rounded-lg"/>
            <div className="bg-gray-400 h-5 w-32 rounded-lg"/>
          </div>
          <div className="bg-gray-400 h-5 rounded-lg w-1/2"/>
        </div>
      </div>
    </>
    
  )
}

export default LoadingComment