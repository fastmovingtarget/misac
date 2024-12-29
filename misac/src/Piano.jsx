/* Created 11/12/2024 */
import {useState, useRef} from 'react'
import useSound from "use-sound"
import {useNotes} from './NoteContext';
import { useOptions } from './OptionsContext';
import "./Piano.css";

/** Visualisation of a single octave of a piano using coloured list elements 
*@return A Piano octave element with notes and keys
*@notePressHandler a funtion to set that a note has been pressed, will be passed up and then the pressed note will be passed down to the music notation element
*@octaveNumber int, the number of the octave (according to scientific note notation), with middle C being C4
*/
function Piano({notePressHandler, octaveNumber}) {
    const [hoverNote, setHoverNote] = useState(null)//sets the note that's being hovered over
    const [pressedNote, setPressedNote] = useState(null)
    const noteContext = useNotes();
    const {volume, keys, key, keyBinds} = useOptions();

    const currentPressedNote = useRef(null)

    const selectedKey = keys[key];


    const isFlat = selectedKey[7].includes("\u266d")//check to see whether the key signature is flat or sharp

    const octaveTopSharp = ["c", "c\u266f", "d", "d\u266f", "e", "f", "f\u266f", "g", "g\u266f", "a", "a\u266f", "b"];
    const octaveTopFlat = ["c", "d\u266d", "d", "e\u266d", "e", "f", "g\u266d", "g", "a\u266d", "a", "b\u266d", "b"];
    const octaveBottom = ["c", "d", "e", "f", "g", "a", "b"];//7 notes in white
    const octaveTop = isFlat ? octaveTopFlat : octaveTopSharp;//base the top notes on whether isFlat is true

    const playHooks = [
        useSound(noteContext["c" + octaveNumber], {volume:volume}), 
        useSound(noteContext["c\u266f" + octaveNumber], {volume:volume}),
        useSound(noteContext["d" + octaveNumber], {volume:volume}),
        useSound(noteContext["d\u266f" + octaveNumber], {volume:volume}),
        useSound(noteContext["e" + octaveNumber], {volume:volume}),
        useSound(noteContext["f" + octaveNumber], {volume:volume}),
        useSound(noteContext["f\u266f" + octaveNumber], {volume:volume}),
        useSound(noteContext["g" + octaveNumber], {volume:volume}),
        useSound(noteContext["g\u266f" + octaveNumber], {volume:volume}),
        useSound(noteContext["a" + octaveNumber], {volume:volume}),
        useSound(noteContext["a\u266f" + octaveNumber], {volume:volume}),
        useSound(noteContext["b" + octaveNumber], {volume:volume})
    ];

    const handleNotePress = (pianoKey) => {
        setPressedNote(pianoKey);
        notePressHandler(pianoKey, octaveNumber);
        //console.log(octaveTop.indexOf(pianoKey))
        try{
        playHooks[octaveTop.indexOf(pianoKey)][0]()

        }
        catch(err){
console.log("error!")
        }
    }

    const handleKeyboardPress = (e) => {
        if(Object.keys(keyBinds).includes(e.code))//only want to prevent default if we're overriding that key with a key bind
            e.preventDefault()
        //if(currentPressedNote.current)//we set the current note lower down: we don't want multiple note sounds being played at once
        if(e.repeat)
            return;


        const keyboardNote = keyBinds[e.code];
        
        if(keyboardNote?.octave === octaveNumber){
        console.log(e === currentPressedNote.current)
        //console.log(e)
            currentPressedNote.current = e
           // for(let i = 0; i < 5000; i++ )
                handleNotePress(keyboardNote.note)
        }
    }

    const handleKeyboardUp = (e) => {
        e.preventDefault();
        currentPressedNote.current = null
        setPressedNote(null)
    }

    document.addEventListener("keydown", handleKeyboardPress);
    document.addEventListener("keyup", handleKeyboardUp);

    return(
        <div className="piano-container">
            <ul className="piano-top">
                {octaveTop.map((pianoKey) => {
                    return (
                        <li 
                        id={pianoKey + octaveNumber + "-top"} 
                        key={pianoKey + octaveNumber + "-top"} 
                        className={"top " +
                            pianoKey + 
                            (pianoKey.includes("\u266f") || pianoKey.includes("\u266d") ? " black" : " white") + 
                            (pianoKey === hoverNote && pianoKey !== pressedNote ? " hovering " : "") + 
                            (pianoKey === pressedNote ? " pressed" : "") + 
                            " octave-" + octaveNumber
                        }
                            onMouseEnter={() => setHoverNote(pianoKey)}
                            onMouseLeave={() => {
                                setHoverNote(null)
                                setPressedNote(null)
                            }}
                            onMouseDown={() => handleNotePress(pianoKey)}
                            onMouseUp={() => setPressedNote(null)}
                        >
                            {selectedKey.includes(pianoKey) && (pianoKey.includes("\u266f") || pianoKey.includes("\u266d")) ? pianoKey.toLocaleUpperCase() : null}
                        </li>
                    )
                })}
            </ul>
            <ul className="piano-bottom">
                {octaveBottom.map((pianoKey) => {
                    return (
                        <li 
                        id={pianoKey + octaveNumber + "-bottom"} 
                        key={pianoKey + octaveNumber + "-bottom"} 
                        className={
                            "bottom white " + pianoKey +
                            (pianoKey === hoverNote && pianoKey !== pressedNote ? " hovering" : "")+ 
                            (pianoKey === pressedNote ? " pressed" : "") + 
                            " octave-" + octaveNumber
                        }
                        onMouseEnter={() => setHoverNote(pianoKey)}
                        onMouseLeave={() => {
                            setHoverNote(null)
                            setPressedNote(null)
                        }}
                        onMouseDown={() => handleNotePress(pianoKey)}
                        onMouseUp={() => setPressedNote(null)}
                        >
                            {selectedKey.includes(pianoKey) ? pianoKey.toLocaleUpperCase() : null}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Piano;