import './App.css';

const RenderBox = () => {
  let arrayObj = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#"
    }
  ]

  const jokesDiv = arrayObj.map(element => (
      <div className='jokeDivs'>
        <h1>{element.setup}</h1>
        <p>{element.punchline}</p>
      </div>
  ));

  return (<div className='rendered' >{jokesDiv}</div>);
}

function App() {

  return (
    <div className="App">
      <RenderBox />
    </div>
  );
}

export default App;
