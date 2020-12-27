
import FC from './components/FunctionalComp';
import {FirstComponentCls,SecondComponentCls} from "./components/ComponentClass";
import  Click  from "./components/click";
import Counter  from './components/Counter';
import ParentComp from './components/ParentComp'
function App() {
  return (
    <div className="App">
    
      <FC title="Functional component"> <button>button</button></FC>
      <FirstComponentCls compName="First Component"></FirstComponentCls>
      <SecondComponentCls >
      <button>button</button>
      </SecondComponentCls>
      <Click/>  
      <Counter/>
      <ParentComp/>
    </div>
  );
}

export default App;
