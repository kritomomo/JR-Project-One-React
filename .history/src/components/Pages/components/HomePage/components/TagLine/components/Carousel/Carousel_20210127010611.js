import TextCarousel from "../../lib/index";
import React from "react"

let Carousel = React.createClass({
    render() {
      const typistProps = {
        avgTypingDelay: 90,
        cursor: {
          hideWhenDone: true,
          hideWhenDoneDelay: 400
        }
      }
      const phrases = ["words", "chars", "phrases"];
      return (
        <div className="example">
          <h1>react-text-carousel</h1>
          A sentence with some <TextCarousel phrases={phrases} typistProps={typistProps} />.
        </div>
      );
    }
});
  
export default Carousel;