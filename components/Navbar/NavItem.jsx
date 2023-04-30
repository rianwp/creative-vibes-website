import Link from "next/link"

const NavItem = ({href, children, onClick}) => {
  return (
    <Link onClick={onClick} href={href} className="opacity-80 hover:opacity-100 transition duration-300 md:text-base text-sm">{children}</Link>
  )
}

export default NavItem