// import { useState } from 'react'

import './App.css'
import DisplayList from './components/DisplayList';
import DisplayComp from './components/DisplayComp';

function App() {
  // const [count, setCount] = useState(0)

  const itemList = [
    {item:'abc',desc:'xyz'},
    {item:'def',desc:'uvw'},
    {item:'ghi',desc:'rst'},
    {item:'klm',desc:'opq'},
  ]


  return (
    <>
      <div>
      <p>Hello</p>
      <DisplayComp id={1} name='Kalpa' mobile='1827364182' email='abc@gmail.com'></DisplayComp>
      <br></br>
      <DisplayList items={itemList}></DisplayList>
      </div>
    </>
  )
}

export default App;


// Build an React component that uses data binding to display a user's profile information.
// Build a simple React app that displays a list of items with their descriptions.