
import './App.css';
import Button from './components/Button'
import Input from './components/Input'
import ClearButton from './components/ClearButton'
import React from 'react'
import {useState} from 'react'
function App() {
  

  const [newState, setState] = useState({
    input: ''
  })

  const addToInput = val => {
    setState({input: newState.input + val});
  }

  
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={newState.input}></Input>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>

        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>X</Button>

        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>

        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={addToInput}>=</Button>
          <Button handleClick={addToInput}>-</Button>

        </div>
        <div className="row">
          <ClearButton handleClear={() => setState({input: ""})}>Clear</ClearButton>
        </div>
       

      </div>
       
      
    </div>
  );
}

export default App;
