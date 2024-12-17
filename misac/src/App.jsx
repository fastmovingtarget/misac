import {useState} from 'react';
import './App.css';
import Piano from "./Piano";
import Stave from "./Stave";
import Options from "./Options"

function App() {   

  const keys = {
    "c":["c", "d", "e", "f", "g", "a", "b", "\u266e"],
    "g":["c", "d", "e", "f#", "g", "a", "b", "\u266F"],
    "d":["c#", "d", "e", "f#", "g", "a", "b", "\u266F\u266F"],
    "a":["c#", "d", "e", "f#", "g#", "a", "b", "\u266F\u266F\u266F"],
    "e":["c#", "d#", "e", "f#", "g#", "a", "b", "\u266F\u266F\u266F\u266F"],
    "b":["c#", "d#", "e", "f#", "g#", "a#", "b", "\u266F\u266F\u266F\u266F\u266F"],
    /*"f#":["c#", "d#", "f", "f#", "g#", "a#", "b", "6#"],
    "c#":["c#", "d#", "f", "f#", "g#", "a#", "c", "7#"], ok, thinking about these it's absolutely horrible to implement*/
    "f":["c", "d", "e", "f", "g", "a", "b\u266d", "\u266d"],//\u266d is the utf-16 code for the musical flat symbol
    "b\u266d":["c", "d", "e\u266d", "f", "g", "a", "b\u266d", "\u266d\u266d"],
    "e\u266d":["c", "d", "e\u266d", "f", "g", "a\u266d", "b\u266d", "\u266d\u266d\u266d"],
    "a\u266d":["c", "d\u266d", "e\u266d", "f", "g", "a\u266d", "b\u266d", "\u266d\u266d\u266d\u266d"],
    "d\u266d":["c", "d\u266d", "e\u266d", "f", "g\u266d", "a\u266d", "b\u266d", "\u266d\u266d\u266d\u266d\u266d"]/*,
    "g\u266d":["c", "d\u266d", "e\u266d", "e", "g\u266d", "a\u266d", "b\u266d", "6\u266d"],
    "c\u266d":["b", "d\u266d", "e\u266d", "e", "g\u266d", "a\u266d", "b\u266d", "7\u266d"] also out of scope*/
  }

  const notes = ["c", "d", "e", "f", "g", "a", "b"];
  const [options, setOptions] = useState({
    key:"c",
    volume:"0.5",
    numNotes:2
  })
  
  const generateNewNoteSet = (numNotes = options.numNotes) => {
    let newNoteSet = [];
    for(let i = 0; i < numNotes; i++){
      const noteKeyIndex = Math.floor(Math.random() * 7)
      newNoteSet.push({
        noteKeyIndex,
        note:notes[noteKeyIndex],
        state:""
      })
    }
    return newNoteSet
  }
  const [currentNoteSet, setCurrentNoteSet] = useState(generateNewNoteSet())

  const setOptionsHandler = (e) => {
    const { name, value } = e.target;

    setOptions((previousInput) => ({
      ...previousInput,
      [name]:value
    }));
    if(e.target.name === "numNotes")
      setCurrentNoteSet(generateNewNoteSet(value));
  }


  const notePressHandler = (notePressed) => {
    const currentNoteSetIndex = currentNoteSet.findIndex((element) => element.state !== "successful");//find the index of the current incorrect or unused note in the current note set
    const currentNote = currentNoteSet[currentNoteSetIndex];

    if(notePressed === keys[options.key][currentNote.noteKeyIndex]){//if the current unsuccessful note's index in the current key is equal to the pressed note
      if(currentNoteSetIndex === currentNoteSet.length - 1)//and it's the last note in the set
        setCurrentNoteSet(generateNewNoteSet())//regenerate the set
      else{
        let newNoteSet = [...currentNoteSet];
        newNoteSet[currentNoteSetIndex].state = "successful"//set the state to success if the note isn't the last note in the set
        setCurrentNoteSet(newNoteSet)
      }
    }
    else{//if the wrong note is pressed
      let newNoteSet = [...currentNoteSet];
      newNoteSet[currentNoteSetIndex].state = "unsuccessful"//set the state to unsuccessful instead
      setCurrentNoteSet(newNoteSet)
    }
  }

  return (
    <div className="App">
      <Options keys={keys} options={options} setOptionsHandler={setOptionsHandler}/>
      <Stave currentNoteSet={currentNoteSet} numNotes={options.numNotes}/>
      <Piano notePressHandler={notePressHandler} selectedKey={keys[options.key]} volume={options.volume}/>
    </div>
  );
}

export default App;
