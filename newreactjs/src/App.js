import React, {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const buttonClick = () => {
    setCounter(counter + 1);
  }
  const anotherElement = <h3>hi from h3</h3>
  return (
    <div className="App container">
      <p>from component text</p>
      {anotherElement}
      <button onClick={buttonClick} className='btn btn-info'>click me</button>
      <h1>button clicked #{counter}</h1>
    </div>
  )
}

export default App;