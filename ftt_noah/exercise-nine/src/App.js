import './App.css';
import React, { useEffect, useState } from 'react';


function App() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [content, setContent] = useState([]);

  const fetchData = async () => {
      try {
        fetch('https://random-data-api.com/api/users/random_user?size=10')
          .then((response) => response.json())
            .then((data) => {
              setContent(data);            
            });     
      } catch (error) {
        setError(error);
      }finally {
        setLoading(false);
      }
  };
  
  useEffect(()=> {
    fetchData();
  }, []);

  
  const HandleRendering = () => {    

    const info = content.map(data => (
      <div className="flip-card" key={data.uid}>
            <div className="flip-card-inner">
              <div className="flip-card-front">                
                <img src={data.avatar} />
                <p className='name'>{data.first_name} {data.last_name}</p>
                <p>{data.employment.title}</p>
              </div>
              <div className="flip-card-back">
                <h1>More Information Here</h1>
                <p>DOB: {data.date_of_birth}</p>
                <p>City: {data.address.city}</p>
              </div>
            </div>
          </div>
    ));

    return <div className='gridBox'>{info}</div>;
  };  

  return (
    <div className="App">
      <div onClick={fetchData} className='button'><span>Fetch Random</span></div>
      <HandleRendering />
    </div>
  );
}

export default App;
