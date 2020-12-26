import logo from './logo.svg';
import './App.css';
import FC from './components/FunctionalComp';
import {FirstComponentCls,SecondComponentCls} from "./components/ComponentClass";
import  Click  from "./components/click";
import Counter  from './components/Counter'
function App() {
  return (
    <div className="App">
      <h1>
        Hello from React world
      </h1>
      <FC></FC>
      <FirstComponentCls></FirstComponentCls>
      <SecondComponentCls></SecondComponentCls>
      <Click/>  
      <Counter/>
    </div>
  );
}

export default App;
