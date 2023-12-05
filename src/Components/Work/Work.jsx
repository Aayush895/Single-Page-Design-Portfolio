import { useRef } from 'react'

const Work = () => {
  const galleryRef = useRef(null)

  const handlePrevScroll = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft -= 450
    }
  }

  const handleNextScroll = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft += 450
    }
  }

  return (
    <div id="work">
      <div className="work-header">
        <h1>My Work</h1>
      </div>
      <div className="work-wrapper">
        <div className="work-container" ref={galleryRef}>
          <img src="../../images/image-slide-1.jpg" alt="image-1" />
          <img src="../../images/image-slide-2.jpg" alt="image-2" />
          <img src="../../images/image-slide-3.jpg" alt="image-3" />
          <img src="../../images/image-slide-4.jpg" alt="image-4" />
          <img src="../../images/image-slide-5.jpg" alt="image-5" />
        </div>
        <img
          src="../../images/icon-arrow-left.svg"
          alt="prev-arrow"
          onClick={handlePrevScroll}
        />
        <img
          src="../../images/icon-arrow-right.svg"
          alt="next-arrow"
          onClick={handleNextScroll}
        />
      </div>
    </div>
  )
}
export default Work
