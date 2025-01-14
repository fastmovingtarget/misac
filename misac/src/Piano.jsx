/* Created 11/12/2024 */
import {useState} from 'react'
import { useOptions } from './OptionsContext';
import "./Piano.css";

/** Visualisation of a single octave of a piano using coloured list elements 
*@return A Piano octave element with notes and keys
*@notePressHandler a funtion to set that a note has been pressed, will be passed up and then the pressed note will be passed down to the music notation element
*@octaveNumber int, the number of the octave (according to scientific note notation), with middle C being C4
*/
function Piano({notePressHandler, octaveNumber, currentPressedNote, setCurrentPressedNote}) {
    const [hoverNote, setHoverNote] = useState(null)//sets the note that's being hovered over
    const {keys, key} = useOptions();

    const selectedKey = keys[key];

    const isFlat = selectedKey[7].includes("\u266d")//check to see whether the key signature is flat or sharp

    const octaveTopSharp = ["c", "c\u266f", "d", "d\u266f", "e", "f", "f\u266f", "g", "g\u266f", "a", "a\u266f", "b"];
    const octaveTopFlat = ["c", "d\u266d", "d", "e\u266d", "e", "f", "g\u266d", "g", "a\u266d", "a", "b\u266d", "b"];
    const octaveBottom = ["c", "d", "e", "f", "g", "a", "b"];//7 notes in white
    const octaveTop = isFlat ? octaveTopFlat : octaveTopSharp;//base the top notes on whether isFlat is true

    const handleNotePress = (pianoKey) => {
        notePressHandler(pianoKey, octaveNumber);
        setCurrentPressedNote({pianoKey, octaveNumber})
    }

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
                            (pianoKey === hoverNote && pianoKey !== currentPressedNote ? " hovering " : "") + 
                            (pianoKey === currentPressedNote ? " pressed" : "") + 
                            " octave-" + octaveNumber
                        }
                            onMouseEnter={() => setHoverNote(pianoKey)}
                            onMouseLeave={() => {
                                setHoverNote(null)
                                setCurrentPressedNote(null)
                            }}
                            onMouseDown={() => handleNotePress(pianoKey)}
                            onMouseUp={() => setCurrentPressedNote(null)}
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
                            (pianoKey === hoverNote && pianoKey !== currentPressedNote ? " hovering" : "")+ 
                            (pianoKey === currentPressedNote ? " pressed" : "") + 
                            " octave-" + octaveNumber
                        }
                        onMouseEnter={() => setHoverNote(pianoKey)}
                        onMouseLeave={() => {
                            setHoverNote(null)
                            setCurrentPressedNote(null)
                        }}
                        onMouseDown={() => handleNotePress(pianoKey)}
                        onMouseUp={() => setCurrentPressedNote(null)}
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