import { useState } from 'react';
import './App.css';

function HandleFirst({value, onChange}) {
  return(
      <input onChange={onChange} value={value} placeholder="first name"></input>
  );    
}

function HandleSecond({value, onChange}) {
  return(
      <input onChange={onChange} value={value} placeholder="last name"></input>
  );    
}


function App() {  

  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');

  const handleFirstInput = (event) => {
    setfName(event.target.value);
  };

  const handleSecondInput = (event) => {
    setlName(event.target.value);
  };

  const handleClick = () => {
    alert("Hello " + fname + " " + lname + "!");
    setfName('');
    setlName('');
  }

  return (    
    <div className='form'>
        <HandleFirst value={fname} onChange={handleFirstInput}/>
        <HandleSecond value={lname} onChange={handleSecondInput}/>
        <button onClick={handleClick}>GREET ME</button>
      </div>
  );
}

export default App;