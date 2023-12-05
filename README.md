# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![Desktop](/screenshots/Desktop.png)
![Mobile](/screenshots/Mobile.png)
![Tablet](/screenshots/Tablet.png)


### Links

- Solution URL: [Source-Code](https://github.com/Aayush895/Single-Page-Design-Portfolio)
- Live Site URL: [Live Site](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Learned how to implement our own custom slider component in React and how to perform DOM manipulation in React with the help of `useRef` hook.

To see how you can implement your own custom slider component in React, see below:

```jsx
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
          <img src="../../src/assets/image-slide-1.jpg" alt="image-1" />
          <img src="../../src/assets/image-slide-2.jpg" alt="image-2" />
          <img src="../../src/assets/image-slide-3.jpg" alt="image-3" />
          <img src="../../src/assets/image-slide-4.jpg" alt="image-4" />
          <img src="../../src/assets/image-slide-5.jpg" alt="image-5" />
        </div>
        <img
          src="../../src/assets/icon-arrow-left.svg"
          alt="prev-arrow"
          onClick={handlePrevScroll}
        />
        <img
          src="../../src/assets/icon-arrow-right.svg"
          alt="next-arrow"
          onClick={handleNextScroll}
        />
      </div>
    </div>
  )
}
export default Work
```

### Continued development

Through this project, I was able to implement my own custom slider. Due to this, I was able to learn about the `useRef` hook in React and how to use it properly for DOM manipulation in React. Going forward, I will use these learnings to refine my understanding of the `useRef` hook and about DOM manipulations in React, and I will try to build some complex components using the learnings I got from this project.

### Useful resources

- [React Docs on useRef hook](https://react.dev/learn/manipulating-the-dom-with-refs) - This part from the React documentation helped me get a clear understanding of the `useRef` hook and how to perform DOM manipulation using this hook.

- [Youtube video on custom slider](https://www.youtube.com/watch?v=gzXyRa7jwk4) - This video on YouTube helped me get a clear understanding of how to implement a custom slider for this project.

## Author

- Frontend Mentor - [@Aayush895](https://www.frontendmentor.io/profile/Aayush895)
- Twitter - [@JhaAayush895](https://www.twitter.com/JhaAayush895)

## Acknowledgments

I would like to thank the entire frontend-mentor team for providing such interesting challenges to test and improve my skills in the domain of frontend web development.


