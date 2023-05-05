import Link from "next/link"

const FooterItem = ({children, href, target, onClick}) => {
  return (
      href ? 
      <Link href={href} onClick={onClick} target={target} className="text-white opacity-80 hover:opacity-100 transition duration-300 inline-flex flex-row items-center space-x-2 break-all max-w-fit">
        {children}
      </Link>
      :
      <div className="text-white opacity-80 inline-flex flex-row items-center space-x-2 break-all max-w-fit">
        {children}
      </div>
  )
}

export default FooterItem