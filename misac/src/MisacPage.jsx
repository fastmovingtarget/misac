import {useState} from 'react';
import './App.css';
import "./MisacPage.css";
import Piano from "./Piano";
import Stave from "./Stave";
import Options from "./Options";
import Score from "./Score";
import {useOptions} from "./OptionsContext"

/**
 * 
 * @returns React Component: Page controlling the stave, score, options and keyboard
 * */

function MisacPage() {   
  const [score, setScore] = useState(0);
  const [currentPressedNote, setCurrentPressedNote] = useState(null);
  const [optionsActive, setOptionsActive] = useState(false)

  const {currentNoteSet, setCurrentNoteSet, keys, key, generateNewNoteSet, octaves, setHighScore, highScore, playHooks, keyBinds} = useOptions()
  
    const notePressHandler = (notePressed, octaveNumber) => {
        playHooks[notePressed + octaveNumber]()

        const currentNoteSetIndex = currentNoteSet.findIndex((element) => element.state !== "successful");//find the index of the current incorrect or unused note in the current note set
        const currentNote = currentNoteSet[currentNoteSetIndex];

        if(notePressed === keys[key][currentNote.noteKeyIndex] && octaveNumber === currentNote.octave){//if the current unsuccessful note's index in the current key is equal to the pressed note
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

  const keyPressHandler = (e) => {
    if(optionsActive)
      return

    const code = e.code;
    console.log(e)
    if(e.repeat || !Object.keys(keyBinds).includes(code))
      return;
    else
      e.preventDefault()

    const {note, octave} = keyBinds[code];

    console.log({note, octave})
    setCurrentPressedNote({
      octaveNumber:octave, 
      pianoKey:note
    })
    notePressHandler(note, octave)
  }

  const keyUpHandler = (e) => {
    setCurrentPressedNote(null)
  }



  return (
    <div className="misac-container column" onKeyDown={keyPressHandler} onKeyUp={keyUpHandler} tabIndex={0}>
      <div className="top-bar-container row">
        <Score score={score} setScore={setScore}/>
        <Options optionsActive={optionsActive} setOptionsActive={setOptionsActive}/>
      </div>
      <Stave/>
      <div className="keyboard-container">
        {
          JSON.parse(octaves).map((octave) => 
            <Piano key={"octave-key" + octave} notePressHandler={notePressHandler} octaveNumber={octave} currentPressedNote={currentPressedNote?.octaveNumber === octave ? currentPressedNote.pianoKey : null} setCurrentPressedNote={setCurrentPressedNote}/>
          )
        }
      </div>
    </div>
  );
}

export default MisacPage;
