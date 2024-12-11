/* Created 11/12/2024 */
import {useState} from 'react'
import "./Piano.css";

/** Visualisation of a single octave of a piano using coloured list elements 
*@return A Piano octave element with notes and keys
*@setNotePress a funtion to set that a note has been pressed, will be passed up and then the pressed note will be passed down to the music notation element
*/
function Piano({setNotePress}) {
    const octaveTop = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];// 7 notes in white and 5 half-notes in black. I decided to go with sharp rather than flat simply because the notation is easier to use
    const octaveBottom = ["c", "d", "e", "f", "g", "a", "b"];//7 notes in white

    const [hoverNote, setHoverNote] = useState(null)//sets the note that's being hovered over


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
                            (pianoKey === hoverNote ? " hovering" : "")}
                            onMouseEnter={() => setHoverNote(pianoKey)}
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
                            (pianoKey === hoverNote ? " hovering" : "")
                        }
                        onMouseEnter={() => setHoverNote(pianoKey)}
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