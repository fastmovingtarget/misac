/* Created 11/12/2024 */
import {useState} from 'react'
import "./Piano.css";

/** Visualisation of a single octave of a piano using coloured list elements 
*@return A Piano octave element with notes and keys
*@setNotePress a funtion to set that a note has been pressed, will be passed up and then the pressed note will be passed down to the music notation element
*/
function Piano({notePressHandler, selectedKey}) {
    const [hoverNote, setHoverNote] = useState(null)//sets the note that's being hovered over
    const [pressedNote, setPressedNote] = useState(null)

    const isFlat = selectedKey[7].includes("\u266d")//check to see whether the key signature is flat or sharp

    const octaveTopSharp = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
    const octaveTopFlat = ["c", "d\u266d", "d", "e\u266d", "e", "f", "g\u266d", "g", "a\u266d", "a", "b\u266d", "b"];
    const octaveBottom = ["c", "d", "e", "f", "g", "a", "b"];//7 notes in white
    const octaveTop = isFlat ? octaveTopFlat : octaveTopSharp;//base the top notes on whether isFlat is true

    const handleNotePress = (pianoKey) => {
        notePressHandler(pianoKey)
    }

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
                            (pianoKey.includes("#") || pianoKey.includes("\u266d") ? " black" : " white") + 
                            (pianoKey === hoverNote && pianoKey !== pressedNote ? " hovering " : "") + 
                            (pianoKey === pressedNote ? " pressed" : "")}
                            onMouseEnter={() => setHoverNote(pianoKey)}
                            onClick={() => handleNotePress(pianoKey)}
                            onMouseDown={() => setPressedNote(pianoKey)}
                            onMouseUp={() => setPressedNote(null)}
                        >
                            {selectedKey.includes(pianoKey) ? pianoKey.toLocaleUpperCase() : null}
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
                            {selectedKey.includes(pianoKey) ? pianoKey.toLocaleUpperCase() : null}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Piano;