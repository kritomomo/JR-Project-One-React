import React from 'react';
import './App.css';
import Header from '../Header';
import Pages from '../Pages';
import Footer from '../Footer';
import { PAGE } from '../../constants';
  
// const currentPage = PAGE.RESUME;
const obj = {
  currentPage: PAGE.HOME,
};

  function App() {
  return (
    <div className="main">
      <div className="layout">
        <div className="layout__header">
          <Header currentPage={obj.currentPage} obj={obj} />
        </div>
        <div className="layout__page">
          <Pages currentPage={obj.currentPage} obj={obj} />
        </div>
        <div className="layout__footer">
          <Footer />
        </div>
      </div>
    </div>
    1
  );
}

export default App;
