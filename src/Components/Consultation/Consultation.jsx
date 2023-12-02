import Button from "../Utility-Component/Buttons"

const Consultation = () => {
  return (
    <div id="consultation-container">
      <div className="counsel-info">
        <h1>Book a call with me</h1>
        <p>
          I’d love to have a chat to see how I can help you. The best first step
          is for us to discuss your project during a free consultation. Then we
          can move forward from there.
        </p>
      </div>
      <Button className="red-button" />
    </div>
  )
}
export default Consultation