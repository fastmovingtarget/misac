import "./Stave.css"
import minim from "./img/minim.png"
import trebleclef from "./img/trebleclef.png"

function Stave({currentNoteSet, numNotes}){
    //let noteIcon;

    const noteIndent = 400;
    const noteGap = 1200/numNotes;

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
                            <div key={index} className={"note-container minim " + currentNote.note} style={{left:noteIndent + (noteGap * index)}} >
                                <div className="note-relative">
                                    <img className={"minim " + currentNote.note + " " + currentNote.state} id="minim" src={minim} alt="minim" />
                                    <div className="bottom-1"></div>
                                    <div className="bottom-2"></div>
                                    <div className="bottom-3"></div>
                                    <div className="bottom-4"></div>
                                </div>
                            </div>
                    )})
                }
                <img className="trebleclef" id="trebleClef" src={trebleclef} alt="trebleclef"/>
            </div>
        </div>
    )
}

export default Stave