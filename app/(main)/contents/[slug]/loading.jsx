const Loading = () => {
  return (
    <div className="w-full animate-pulse">
    <div className="py-32 lg:w-3/4 md:w-full sm:w-full w-full mx-auto sm:px-8 px-4">
      <div className="w-full flex justify-center items-center">
        <div className="h-6 w-1/2 bg-gray-400 rounded-lg"></div>
      </div>
      <div className="mt-5 w-full">
        <div className="flex flex-row items-center mb-2 flex-wrap">
          <div className="flex flex-row items-center space-x-2 text-gray-400 mr-2 mb-2">
            <div className="bg-gray-400 h-5 w-32 rounded-lg"/>
          </div>
        </div>
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-5 bg-gray-400"/>
        <div className="w-full">
          {[...Array(20)].map((x, i) => 
            <div key={i} class="h-4 bg-gray-400 rounded-lg w-full mb-2"/>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Loading