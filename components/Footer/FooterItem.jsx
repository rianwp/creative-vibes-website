const FooterItem = ({children, href}) => {
  return (
      href ? 
      <a href={href} target="_blank" className="text-white opacity-80 hover:opacity-100 transition duration-300 inline-flex flex-row items-center space-x-2 break-all max-w-fit">
        {children}
      </a>
      :
      <div className="text-white opacity-80 inline-flex flex-row items-center space-x-2 break-all max-w-fit">
        {children}
      </div>
  )
}

export default FooterItem