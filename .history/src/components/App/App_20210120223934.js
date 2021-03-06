import React from 'react';
import './App.css';
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className="layout">
      <div className="layout__header"></div>
      <div className="layout__page"></div>
      <div className="layout__footer">
        <footer class="container">
            <div class="text-center">
                © 2021 All rights reserved. Designed by 
                <a href="https://github.com/kritomomo">
                  <span>Robert Xu</span>
                </a>
          </div>
        </footer>
        <Footer />
      </div>
    </div>
  );
}

export default App;
