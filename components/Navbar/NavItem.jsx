const NavItem = ({href, children}) => {
  return (
    <a href={href} className="opacity-80 hover:opacity-100 transition duration-300 md:text-base text-sm">{children}</a>
  )
}

export default NavItem