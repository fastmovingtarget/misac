import {useState} from 'react';
import './App.css';
import Piano from "./Piano";
import Stave from "./Stave";
import Options from "./Options"

function App() {   

  const keys = {
    "c":["c", "d", "e", "f", "g", "a", "b", "0"],
    "g":["c", "d", "e", "f#", "g", "a", "b", "1#"],
    "d":["c#", "d", "e", "f#", "g", "a", "b", "2#"],
    "a":["c#", "d", "e", "f#", "g#", "a", "b", "3#"],
    "e":["c#", "d#", "e", "f#", "g#", "a", "b", "4#"],
    "b":["c#", "d#", "e", "f#", "g#", "a#", "b", "5#"],
    "f#":["c#", "d#", "f", "f#", "g#", "a#", "b", "6#"],
    "c#":["c#", "d#", "f", "f#", "g#", "a#", "c", "7#"], 
    "f":["c", "d", "e", "f", "g", "a", "b\u266d", "1\u266d"],//\u266d is the utf-16 code for the musical flat symbol
    "b\u266d":["c", "d", "e\u266d", "f", "g", "a", "b\u266d", "2\u266d"],
    "e\u266d":["c", "d", "e\u266d", "f", "g", "a\u266d", "b\u266d", "3\u266d"],
    "a\u266d":["c", "d\u266d", "e\u266d", "f", "g", "a\u266d", "b\u266d", "4\u266d"],
    "d\u266d":["c", "d\u266d", "e\u266d", "f", "g\u266d", "a\u266d", "b\u266d", "5\u266d"],
    "g\u266d":["c", "d\u266d", "e\u266d", "e", "g\u266d", "a\u266d", "b\u266d", "6\u266d"],
    "c\u266d":["b", "d\u266d", "e\u266d", "e", "g\u266d", "a\u266d", "b\u266d", "7\u266d"]
  }

  const notes = ["c", "d", "e", "f", "g", "a", "b"];
  const [key, setKey] = useState("a\u266d")
  const [currentNote, setCurrentNote] = useState(Math.floor(Math.random() * 7))
  const [feedback, setFeedback] = useState("")

  const notePressHandler = (notePressed) => {
    if(notePressed === keys[key][currentNote]){
      const newNote = Math.floor(Math.random() * 7);
      setCurrentNote(newNote)
      setFeedback("Good Work!")
    }
    else
      setFeedback("Wrong Note!")
  }

  return (
    <div className="App">
      <Options inputKey={key} setKey={setKey}/>
      <Stave currentNote={notes[currentNote]}/>
      <div className="feedback">
        <h2>{feedback}</h2>
      </div>
      <Piano notePressHandler={notePressHandler} selectedKey={keys[key]}/>
    </div>
  );
}

export default App;
