import logo from './logo.svg';
import './App.css';
import OUG from './OUG.jpg'

function App() {
  return (
    <div className="App">
      <div className="App-border-top">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
      </div>
      <div className="picture-box">
        <img src={OUG} alt="Ode" className="App-image" />
      </div>
      <div className="caption">
          <p>Odegaard Undergraduate Library</p>
        </div>
      <header className="App-header">
        {/* Other content can go here */}
      </header>
    </div>
  );
}

export default App;
