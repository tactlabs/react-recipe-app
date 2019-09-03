import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been run');
  }, []);

  return (
    <div className="App">
      
      
      <div>
        <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
      </div>
    </div>
  );
}

export default App;
