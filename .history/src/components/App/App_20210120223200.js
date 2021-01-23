
import './App.css';
import Footer from '../Footer';

function App() {
  return (
    <div className="layout">
      <div className="layout__header"></div>
      <div className="layout__page"></div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
