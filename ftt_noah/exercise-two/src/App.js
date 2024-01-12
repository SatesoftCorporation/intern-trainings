import './App.css';

function App() {
  function handle(){
    alert("Clicked!");
  }

  return (
    <div className="App">
      <button onClick={handle}>Click me</button>
    </div>
  );
}

export default App;
