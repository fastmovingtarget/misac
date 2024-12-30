import {useContext, createContext, useState} from "react"
import Notes from "./Notes"

const OptionsContext = createContext()

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

function OptionsProvider({children}) {

    const [keyBinds, setKeyBinds] = useState({
        "Tab":   {note:"c", octave:4}, 
        "Digit1":{note:"c\u266f", octave:4},    
        "KeyQ":  {note:"d", octave:4},  
        "Digit2":{note:"d\u266f", octave:4}, 
        "KeyW":  {note:"e", octave:4}, 
        "KeyE":  {note:"f", octave:4}, 
        "Digit4":{note:"f\u266f", octave:4}, 
        "KeyR":  {note:"g", octave:4}, 
        "Digit5":{note:"g\u266f", octave:4}, 
        "KeyT":  {note:"a", octave:4}, 
        "Digit6":{note:"a\u266f", octave:4}, 
        "KeyY":  {note:"b", octave:4},
        "KeyU":  {note:"c", octave:5}, 
        "Digit8":{note:"c\u266f", octave:5},
        "KeyI":  {note:"d", octave:5}, 
        "Digit9":{note:"d\u266f", octave:5},
        "KeyO":  {note:"e", octave:5}, 
        "KeyP":  {note:"f", octave:5}, 
        "Minus": {note:"f\u266f", octave:5},
        "BracketLeft": {note:"g", octave:5}, 
        "Equal":      {note:"g\u266f", octave:5}, 
        "BracketRight":{note:"a", octave:5}, 
        "Backspace":   {note:"a\u266f", octave:5}, 
        "Enter":       {note:"b", octave:5}
    })

    const optionsSave = JSON.parse(localStorage.getItem("misacOptions"))
    const scoreSave = localStorage.getItem("misacScore")

    const [options, setOptions] = useState(optionsSave ?? {
        key:"c",
        volume:"0.5",
        numNotes:2,
        octaves:"[4, 5]"
    })

    const [highScore, setHighScore] = useState(scoreSave ?? 0)
    
    const notes = ["c", "d", "e", "f", "g", "a", "b"];

    function generateNewNoteSet (numNotes = options.numNotes, octaves = options.octaves) {
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

        const newOptions = {
            ...options,
            [name]:value
        }

        setOptions(newOptions);
        localStorage.setItem("misacOptions", JSON.stringify(newOptions))
        if(e.target.name === "numNotes"){
            setCurrentNoteSet(generateNewNoteSet(value));
        }
        else if(e.target.name === "octaves"){
            setCurrentNoteSet(generateNewNoteSet(options.numNotes, value));
        }
    }

    const setHighScoreWrapper = (highScore) => {
        localStorage.setItem("misacScore", highScore)
        setHighScore(highScore);
    }

    const {playHooks} = Notes(options.volume);

    return (
        <OptionsContext.Provider value={{...options, setOptionsHandler, currentNoteSet, setCurrentNoteSet, generateNewNoteSet, keys, highScore, setHighScore:setHighScoreWrapper, keyBinds, setKeyBinds, playHooks}}>
            {children}
        </OptionsContext.Provider>
    )
}

export default OptionsProvider;

export const useOptions = () => {
    return useContext(OptionsContext);
}