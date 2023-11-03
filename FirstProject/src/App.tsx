import './App.css';
import DisplayList from './components/DisplayList';
import DisplayComp from './components/DisplayComp';
import LifecyclePrac from './components/lifecyclePrac';

function App() {

  const itemList = [
    {item:'useState',desc:'It allows us to track state in a function component'},
    {item:'useEffect',desc:'It allows you to perform side effects in your components'},
    {item:'useContext',desc:'It can be used together with the useState Hook to share state between deeply nested components'},
    {item:'useCallback',desc:'It returns a memoized callback function.'},
  ]


  return (
    <>
      <div>
      <p>Hello</p>
      <DisplayComp id={1} name='Kalpa' mobile='1827364182' email='abc@gmail.com'></DisplayComp>
      <br></br>
      <DisplayList items={itemList}></DisplayList>
      <br></br>
      <LifecyclePrac></LifecyclePrac>
      </div>
    </>
  )
}

export default App;


// Build an React component that uses data binding to display a user's profile information.
// Build a simple React app that displays a list of items with their descriptions.