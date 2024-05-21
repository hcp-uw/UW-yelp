import { useState } from 'react';
import './App.css';
import OUG from '../src/assets/OUG.jpg';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <div className="App-border-top">
        <div className="hamburger-menu" onClick={toggleMenu}k>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          {menuOpen && (
          <div className="dropdown-menu">
            <a href="#">Dining Areas</a>
            <a href="#">Study Rooms</a>
            <a href="#">About Us</a>
          </div>
          )}
        </div> 
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
      </div>
      <div className="content">
        <div className="picture-box">
          <img src={OUG} alt="Ode" className="App-image" />
        </div>
      </div>
      <div className="caption">
          <p>Odegaard Undergraduate Library</p>
        </div>
      <div className="buttons">
        <button className="button">Study Rooms</button>
        <button className="button">Dining Areas</button>
        <button className="button">Restrooms</button>
      </div>
      
      <header className="App-header">
        {/* Other content can go here */}
      </header>
    </div>
  );
}

export default App;
