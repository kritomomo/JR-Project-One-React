import React from "react";
import "./App.css";
import Header from "../Header";
import Pages from "../Pages";
import Footer from "../Footer";
import { PAGE } from "../../constants";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: PAGE.HOME,
    };
  }
  render() { 
      
    const { currentPage } = this.state;
    
    const change
      return (  
          <div className="main">
              <div className="layout">
                  <div className="layout__header">
                    <Header currentPage={currentPage} />
                  </div>
                  <div className="layout__page">
                    <Pages currentPage={currentPage}  />
                  </div>
                  <div className="layout__footer">
                    <Footer />
                  </div>
              </div>
          </div>
      );
    }
}

// const App = ({
//   render,
//   }) => {

//   const changePage = (pageName) => {
//     obj.currentPage = pageName;
//     render();
//   }

//   return (
//     <div className="main">
//       <div className="layout">
//         <div className="layout__header">
//           <Header currentPage={obj.currentPage} changePage={changePage} />
//         </div>
//         <div className="layout__page">
//           <Pages currentPage={obj.currentPage} />
//         </div>
//         <div className="layout__footer">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   )
// }



export default App;
