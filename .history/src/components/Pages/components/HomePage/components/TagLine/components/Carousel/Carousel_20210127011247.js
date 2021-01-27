import TextCarousel from "../../lib/index";
import React from "react"


const phrases = ["words", "chars", "phrases"];

const Carousel = (

) =>
render() {
    const typistProps = {
      avgTypingDelay: 90,
      cursor: {
        hideWhenDone: true,
        hideWhenDoneDelay: 400
      }
    }
return(
    <div className="example">
        <h1>react-text-carousel</h1>
        A sentence with some <TextCarousel phrases={phrases} typistProps={typistProps} />.
    </div>
)

export default Carousel;