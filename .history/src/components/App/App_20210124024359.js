import React from "react";
import "./App.css";
import Header from "../Header";
import Pages from "../Pages";
import Footer from "../Footer";
import { PAGE } from "../../constants";

// const currentPage = PAGE.RESUME;
const obj = {
  currentPage: PAGE.HOME,
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentPage: PAGE.HOME,
//     };
//   }
//   render() { 
      
//     const { currentPage } = this.state;
    
//       return (  
//           <div className="main">
//               <div className="layout">
//                   <div className="layout__header">
//                     <Header currentPage={currentPage} obj={obj} render={render}/>
//                   </div>
//                   <div className="layout__page">
//                     <Pages currentPage={state.currentPage} obj={obj} />
//                   </div>
//                   <div className="layout__footer">
//                     <Footer />
//                   </div>
//               </div>
//           </div>
//       );
//     }
// }



const App = ({
  render,
}) => []

  
return(
    <div className="main">
      <div className="layout">
        <div className="layout__header">
          <Header currentPage={obj.currentPage} changePage={changePage}/>
        </div>
        <div className="layout__page">
          <Pages currentPage={obj.currentPage} obj={obj} />
        </div>
        <div className="layout__footer">
          <Footer />
        </div>
      </div>
    </div>
)




export default App;
