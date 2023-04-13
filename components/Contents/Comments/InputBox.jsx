import { forwardRef } from "react"

const InputBox = forwardRef(({label, placeholder, textarea, errorMsg, isError}, ref) => {
  <div className="flex flex-col space-y-1.5">
    <label className="text-sm text-black font-semibold">{label}</label>
    {textarea ? 
      <textarea className="text-sm text-black outline-none border-gray-300 p-2 rounded-lg border focus:border-blue-600 transition duration-300 h-36 resize-none" placeholder={placeholder} ref={ref}></textarea>
      :
      <input className="text-sm text-black outline-none border-gray-300 p-2 rounded-lg border focus:border-blue-600 transition duration-300 sm:w-80 w-full"  placeholder={placeholder} ref={ref}/>
    }
    {isError ? 
      <div className="text-red-500 text-sm">{errorMsg}</div>
      :
      null
    }
  </div>
})

export default InputBox