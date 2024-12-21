import { useOptions } from "./OptionsContext";
import "./Stave.css"
import minim from "./img/minim.png"
import trebleclef from "./img/trebleclef.png"

function Stave(){
    const {numNotes, key, currentNoteSet, keys} = useOptions();

    const noteIndent = 200;
    const noteGap = 2000/numNotes;


    return(
        <div className="sheet-container">
            <div className="stave-container column">
                <div className="e space"></div>
                <div className="c space"></div>
                <div className="a space"></div>
                <div className="f space"></div>
                {
                    currentNoteSet.map((currentNote, index) => {
                        return (
                            <div key={index} className={"note-container minim " + currentNote.note + " octave-" + currentNote.octave} style={{left:noteIndent + (noteGap * index)}} >
                                <div className="note-relative">
                                    <img className={"minim " + currentNote.note + " octave-" + currentNote.octave + " " + currentNote.state} id="minim" src={minim} alt="minim" />
                                    <div className="bottom-0"></div>
                                    <div className="bottom-1"></div>
                                    <div className="bottom-2"></div>
                                    <div className="bottom-3"></div>
                                    <div className="bottom-4"></div>
                                </div>
                            </div>
                        )
                    })
                }
                <img className="trebleclef" id="trebleClef" src={trebleclef} alt="trebleclef"/>
                <div className="key-notation-container">
                    {
                        keys[key][7].split("").map((element, index) => {
                            if(element === "\u266e")
                                return null;
                            return <p className={element + " key-notation-" + index} key={index + element} id={element}>{element}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Stave