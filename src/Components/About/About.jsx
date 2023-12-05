import Button from "../Utility-Component/Buttons"

const About = () => {
  return (
    <div id="about">
      <div className="profile-container">
        <img src="../../images/image-amy.webp" alt="Amy" />
      </div>
      <div className="info-container">
        <h1>I’m Amy, and I’d love to work on your next project</h1>
        <p>
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button className="red-button" />
      </div>
    </div>
  )
}
export default About