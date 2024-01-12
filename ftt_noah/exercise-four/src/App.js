import {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const handle = () => {
    setCount (count +1);
  }

  return (
    <div className="App">
      <p>Button has been clicked {count}</p>
      <button onClick={handle}>Click Me</button>      
    </div>
  );
}

export default App;