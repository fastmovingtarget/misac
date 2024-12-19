import {useState} from 'react';
import './App.css';
import Piano from "./Piano";
import Stave from "./Stave";
import Options from "./Options";
import Score from "./Score";
import NoteProvider from './NoteContext';

function App() {   

  const keys = {
    "c":["c", "d", "e", "f", "g", "a", "b", "\u266e"],
    "g":["c", "d", "e", "f\u266f", "g", "a", "b", "\u266F"],
    "d":["c\u266f", "d", "e", "f\u266f", "g", "a", "b", "\u266F\u266F"],
    "a":["c\u266f", "d", "e", "f\u266f", "g\u266f", "a", "b", "\u266F\u266F\u266F"],
    "e":["c\u266f", "d\u266f", "e", "f\u266f", "g\u266f", "a", "b", "\u266F\u266F\u266F\u266F"],
    "b":["c\u266f", "d\u266f", "e", "f\u266f", "g\u266f", "a\u266f", "b", "\u266F\u266F\u266F\u266F\u266F"],
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
    numNotes:2,
    octaves:"[4, 5]"
  })
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  const generateNewNoteSet = (numNotes = options.numNotes, octaves = options.octaves) => {
    let newNoteSet = [];
    for(let i = 0; i < numNotes; i++){
      const noteKeyIndex = Math.floor(Math.random() * 7)
      newNoteSet.push({
        noteKeyIndex,
        note:notes[noteKeyIndex],
        octave:JSON.parse(octaves)[Math.floor(Math.random() * 2)],
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
    else if(e.target.name === "octaves")
    {
      console.log(value)
      setCurrentNoteSet(generateNewNoteSet(options.numNotes, value));
    }

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
      const newScore = score + 1000;
      setScore(newScore);
      if(newScore > highScore)
        setHighScore(newScore)
    }
    else{//if the wrong note is pressed
      let newNoteSet = [...currentNoteSet];
      newNoteSet[currentNoteSetIndex].state = "unsuccessful"//set the state to unsuccessful instead
      setCurrentNoteSet(newNoteSet)
      setScore(score - 1000)
    }
  }

  return (
    <div className="App">
      <div>
        <Score score={score} setScore={setScore} highScore={highScore}/>
      </div>
      <Options keys={keys} options={options} setOptionsHandler={setOptionsHandler}/>
      <Stave currentNoteSet={currentNoteSet} numNotes={options.numNotes} keyNotation={keys[options.key][7]}/>
      <NoteProvider>
        <div className="keyboard-container">
          {
            JSON.parse(options.octaves).map((octave) => 
              <Piano notePressHandler={notePressHandler} selectedKey={keys[options.key]} volume={options.volume} octaveNumber={octave}/>
            )
          }
        </div>
      </NoteProvider>
    </div>
  );
}

export default App;
