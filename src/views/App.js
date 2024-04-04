import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

// function component
function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coco là cục cức thúi trôi sông
        </p>
        {/* render chính nó */}
        <MyComponent />
        {/* Khai báo full => chỉ khi muốn render con */}
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
