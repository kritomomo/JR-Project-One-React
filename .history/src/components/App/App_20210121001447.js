import React from 'react';
import './App.css';
import Header from '../Header';
import Footer from '../Footer';


function App() {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__page">
        <Page />
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
