import {useState} from 'react';
import './App.css';
import Piano from "./Piano";
import Stave from "./Stave";
import Options from "./Options";
import Score from "./Score";
import NoteProvider from './NoteContext';
import {useOptions} from "./OptionsContext"

function MisacPage() {   
  const [score, setScore] = useState(0);

  const {currentNoteSet, setCurrentNoteSet, keys, key, generateNewNoteSet, octaves, setHighScore, highScore} = useOptions()
  
    const notePressHandler = (notePressed) => {
        const currentNoteSetIndex = currentNoteSet.findIndex((element) => element.state !== "successful");//find the index of the current incorrect or unused note in the current note set
        const currentNote = currentNoteSet[currentNoteSetIndex];

        if(notePressed === keys[key][currentNote.noteKeyIndex]){//if the current unsuccessful note's index in the current key is equal to the pressed note
            if(currentNoteSetIndex === currentNoteSet.length - 1){//and it's the last note in the set
            setCurrentNoteSet(generateNewNoteSet())//regenerate the set
        }
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
    <div className="misac-container">
      <div>
        <Score score={score} setScore={setScore}/>
      </div>
      <Options />
      <Stave/>
      <NoteProvider>
        <div className="keyboard-container">
          {
            JSON.parse(octaves).map((octave) => 
              <Piano key={"octave-key" + octave} notePressHandler={notePressHandler} octaveNumber={octave}/>
            )
          }
        </div>
      </NoteProvider>
    </div>
  );
}

export default MisacPage;
