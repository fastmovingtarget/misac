import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Piano from "./Piano"

function App() {
  const [notePressed, setNotePressed] = useState(null)

  return (
    <div className="App">
      <Piano setNotePressed={setNotePressed}/>
    </div>
  );
}

export default App;
