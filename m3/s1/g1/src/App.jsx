import logo from './assets/logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ImageComponent src="https://kinsta.com/it/wp-content/uploads/sites/2/2022/07/what-is-react-js-feature-image.png " alt="Foto React" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent id="button" content="Invia" />
      </header>
    </div>
  );
}

export default App;
