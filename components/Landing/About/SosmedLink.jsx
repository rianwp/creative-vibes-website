const SosmedLink = ({href, children}) => {
  return (
    <a href={href} target="_blank" className="text-black hover:scale-125 hover:-translate-y-1 transition duration-300">
      {children}
    </a>
  )
}

export default SosmedLink