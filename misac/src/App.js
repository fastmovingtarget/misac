import {useState} from 'react'
import './App.css';
import Piano from "./Piano"
import Stave from "./Stave"

function App() {
  const notes = ["c", "d", "e", "f", "g", "a", "b"];
  const [currentNote, setCurrentNote] = useState(notes[Math.floor(Math.random() * 7)])
  const [feedback, setFeedback] = useState("")

  const notePressHandler = (notePressed) => {
    if(notePressed === currentNote){
      const newNote = Math.floor(Math.random() * 7);
      console.log(Math.floor(Math.random() * 7))
      setCurrentNote(notes[newNote])
      setFeedback("Good Work!")
    }
    else
      setFeedback("Wrong Note!")
  }

  return (
    <div className="App">
      <Stave currentNote={currentNote}/>
      <div className="feedback">
        <h3>{feedback}</h3>
      </div>
      <Piano notePressHandler={notePressHandler}/>
    </div>
  );
}

export default App;
