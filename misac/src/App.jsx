import {useState} from 'react';
import './App.css';
import Piano from "./Piano";
import Stave from "./Stave";

function App() {   

  const keys = {
    c:["c", "d", "e", "f", "g", "a", "b"],
    g:["c", "d", "e", "f#", "g", "a", "b"],
    d:["c#", "d", "e", "f#", "g", "a", "b"],
    a:["c#", "d", "e", "f#", "g#", "a", "b"],
    e:["c#", "d#", "e", "f#", "g#", "a", "b"],
    b:["c#", "d#", "e", "f#", "g#", "a#", "b"],
    fsharp:["c#", "d#", "f", "f#", "g#", "a#", "b"]/*,
    f:["c", "d", "e", "f", "g", "a", "b\u266d"],
    bflat:["c", "d", "e\u266d", "f", "g", "a", "b\u266d"],
    eflat:["c", "d", "e\u266d", "f", "g", "a\u266d", "b\u266d"],
    aflat:["c", "d\u266d", "e\u266d", "f", "g", "a\u266d", "b\u266d"],
    dflat:["c", "d\u266d", "e\u266d", "f", "g\u266d", "a\u266d", "b\u266d"]*/
  }

  const notes = ["c", "d", "e", "f", "g", "a", "b"];
  const [currentNote, setCurrentNote] = useState(notes[Math.floor(Math.random() * 7)])
  const [feedback, setFeedback] = useState("")

  const notePressHandler = (notePressed) => {
    if(notePressed === currentNote){
      const newNote = Math.floor(Math.random() * 7);
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
