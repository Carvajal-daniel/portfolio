import ContactButton from "./ContactButton"
import Logo from "./Logo"

const HeaderSection = () => {
  return (
    <nav className="bg-transparent px-3 py-3">
  <div className="container mx-auto flex justify-between items-center">
    <Logo />
    <ContactButton />
  </div>
</nav>

  )
}

export default HeaderSection