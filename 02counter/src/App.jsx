import { useState } from 'react'

import './App.css'

function App() {
  const [counter,setCounter] = useState(0)
//let counter =15
const addValue=()=> {
  // counter+=1
  // console.log(counter)
  setCounter(counter + 1)
}
const removeValue=()=> {
 
  setCounter(counter - 1)
}
  return (
    <>
    <h1>React Course With myself {counter}</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>{" "} 
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
