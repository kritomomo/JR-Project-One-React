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
      const phrases = ["Web Desinger", "", "phrases"];
      return (
        <div className="example">
           <TextCarousel phrases={phrases} typistProps={typistProps} />.
        </div>
      );
    }
});
  
export default Carousel;