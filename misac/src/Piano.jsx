/* Created 11/12/2024 */
import {useState} from 'react'
import "./Piano.css";

/** Visualisation of a single octave of a piano using coloured list elements 
*@return A Piano octave element with notes and keys
*@setNotePress a funtion to set that a note has been pressed, will be passed up and then the pressed note will be passed down to the music notation element
*/
function Piano({notePressHandler, selectedKey}) {
    const octaveTop = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];// 7 notes in white and 5 half-notes in black. I decided to go with sharp rather than flat simply because the notation is easier to use
    const octaveBottom = ["c", "d", "e", "f", "g", "a", "b"];//7 notes in white

    const [hoverNote, setHoverNote] = useState(null)//sets the note that's being hovered over
    const [pressedNote, setPressedNote] = useState(null)

    const handleNotePress = (pianoKey) => {
        notePressHandler(pianoKey)
    }

    console.log("\u266d")


    return(
        <div className="piano-container">
            <ul className="piano-top">
                {octaveTop.map((pianoKey) => {
                    return (
                        <li 
                        id={pianoKey + "-top"} 
                        key={pianoKey + "-top"} 
                        className={"upper-note " +
                            pianoKey + 
                            (pianoKey.includes("#") ? " black" : " white") + 
                            (pianoKey === hoverNote && pianoKey !== pressedNote ? " hovering " : "") + 
                            (pianoKey === pressedNote ? " pressed" : "")}
                            onMouseEnter={() => setHoverNote(pianoKey)}
                            onClick={() => handleNotePress(pianoKey)}
                            onMouseDown={() => setPressedNote(pianoKey)}
                            onMouseUp={() => setPressedNote(null)}
                        >
                            {pianoKey.toLocaleUpperCase()}
                        </li>
                    )
                })}
            </ul>
            <ul className="piano-bottom">
                {octaveBottom.map((pianoKey) => {
                    return (
                        <li 
                        id={pianoKey + "-bottom"} 
                        key={pianoKey + "-bottom"} 
                        className={
                            "lower-note white " + pianoKey +
                            (pianoKey === hoverNote && pianoKey !== pressedNote ? " hovering" : "")+ 
                            (pianoKey === pressedNote ? " pressed" : "")
                        }
                        onMouseEnter={() => setHoverNote(pianoKey)}
                        onClick={() => handleNotePress(pianoKey)}
                        onMouseDown={() => setPressedNote(pianoKey)}
                        onMouseUp={() => setPressedNote(null)}
                        >
                            {pianoKey.toLocaleUpperCase()}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Piano;