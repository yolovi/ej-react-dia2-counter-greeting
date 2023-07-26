import './App.css'
import Counter from './components/Counter/Counter'
import Greeting from './components/Greeting/GreetingChild/GreetingChild'

function App() {

  return (
    <>
      <div>  
        <h2>Counter / Greeting</h2>
        <Counter initialValue = {0} number = {1}/>
        <Counter initialValue = {5} number = {5}/>
        <Greeting/>
      </div>
    </>
  )
}

export default App
