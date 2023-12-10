import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  
  const [count,setCount] = useState(0);
  function addHandler(){
    setCount(count+1);
    console.log(count)
  }
  function subHandler(){
    setCount(count-1);
    console.log(count)
  }
  function resetHandler(){
    setCount(0)
  }
  
  
  return (
    <div className='container'>
      <div className='heading'>increment and decrement</div>
      <div className='counter'>
        <button onClick={subHandler}>
          -
        </button>

        <div className='num'>
          {count}
        </div>

        <button onClick={addHandler}>
          +
        </button>

      </div>
      <button className='button' onClick={resetHandler}>reset</button>
    </div>
  );
}

export default App;
