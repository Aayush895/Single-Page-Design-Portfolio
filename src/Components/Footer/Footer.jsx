import Buttons from '../Utility-Component/Buttons'

const Footer = () => {
  return (
    <footer>
      <div id="nav-logo">
        <img src="../../images/logo.svg" alt="logo" />
      </div>
      <div id="nav-button">
        <Buttons className="dark-button" />
      </div>
    </footer>
  )
}
export default Footer