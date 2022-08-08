import './App.css';
import Home from './Home';
import { useSelector } from "react-redux";


function App() {
  const {count}=useSelector(state=>state.custom)
  return (
    <div className="App">
      <h2>Counter I: {count}</h2>
      <Home/>
 
    </div>
  );
}

export default App;
