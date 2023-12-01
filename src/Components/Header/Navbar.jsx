import Buttons from '../Utility-Component/Buttons'

const Navbar = () => {
  return (
    <nav>
      <div id="nav-logo">
        <img src="../../src/assets/logo.svg" alt="logo" />
      </div>
      <div id="nav-button">
        <Buttons className ='dark-button'/>
      </div>
    </nav>
  )
}

export default Navbar;