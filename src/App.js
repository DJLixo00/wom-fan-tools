import './App.css';
import MainBox from './components/MainBox';
import EQUIP_DATA from "./equipment.js";

function App() {

  const EQUIP_OBJ = EQUIP_DATA

  return (
    <div className="App">
      <MainBox data = {EQUIP_OBJ}/>
    </div>
  );
}

export default App;
