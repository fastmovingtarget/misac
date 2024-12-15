/* Created 11/12/2024 */
import {useState} from 'react'
import useSound from "use-sound"
import a1 from "./aud/a1.wav"
import a1s from "./aud/a1s.wav"
import b1 from "./aud/b1.wav"
import c1 from "./aud/c1.wav"
import c1s from "./aud/c1s.wav"
import d1 from "./aud/d1.wav"
import d1s from "./aud/d1s.wav"
import e1 from "./aud/e1.wav"
import f1 from "./aud/f1.wav"
import f1s from "./aud/f1s.wav"
import g1 from "./aud/g1.wav"
import g1s from "./aud/g1s.wav"
import "./Piano.css";

/** Visualisation of a single octave of a piano using coloured list elements 
*@return A Piano octave element with notes and keys
*@setNotePress a funtion to set that a note has been pressed, will be passed up and then the pressed note will be passed down to the music notation element
*/
function Piano({notePressHandler, selectedKey, volume}) {
    const [hoverNote, setHoverNote] = useState(null)//sets the note that's being hovered over
    const [pressedNote, setPressedNote] = useState(null)

    const playHooks = 
    [
        useSound(c1, {volume:volume}), 
        useSound(c1s, {volume:volume}),
        useSound(d1, {volume:volume}),
        useSound(d1s, {volume:volume}),
        useSound(e1, {volume:volume}),
        useSound(f1, {volume:volume}),
        useSound(f1s, {volume:volume}),
        useSound(g1, {volume:volume}),
        useSound(g1s, {volume:volume}),
        useSound(a1, {volume:volume}),
        useSound(a1s, {volume:volume}),
        useSound(b1, {volume:volume})
    ];

    const isFlat = selectedKey[7].includes("\u266d")//check to see whether the key signature is flat or sharp

    const octaveTopSharp = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
    const octaveTopFlat = ["c", "d\u266d", "d", "e\u266d", "e", "f", "g\u266d", "g", "a\u266d", "a", "b\u266d", "b"];
    const octaveBottom = ["c", "d", "e", "f", "g", "a", "b"];//7 notes in white
    const octaveTop = isFlat ? octaveTopFlat : octaveTopSharp;//base the top notes on whether isFlat is true

    const handleNotePress = (pianoKey) => {
        notePressHandler(pianoKey);
        playHooks[octaveTop.indexOf(pianoKey)][0]()
    }

    return(
        <div className="piano-container">
            <ul className="piano-top">
                {octaveTop.map((pianoKey, index) => {
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
                            onMouseLeave={() => setHoverNote(null)}
                            onClick={() => handleNotePress(pianoKey, index)}
                            onMouseDown={() => setPressedNote(pianoKey)}
                            onMouseUp={() => setPressedNote(null)}
                        >
                            {selectedKey.includes(pianoKey) ? pianoKey.toLocaleUpperCase() : null}
                        </li>
                    )
                })}
            </ul>
            <ul className="piano-bottom">
                {octaveBottom.map((pianoKey, index) => {
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
                        onMouseLeave={() => setHoverNote(null)}
                        onClick={() => handleNotePress(pianoKey, index)}
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