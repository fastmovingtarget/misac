import {useState} from 'react'
import "./Stave.css"
import minim from "./img/minim.png"
import trebleclef from "./img/trebleclef.png"

function Stave({currentNote}){
    return(
        <div className="sheet-container">
            <div className="stave-container column">
                <div className="e space"></div>
                <div className="c space"></div>
                <div className="a space"></div>
                <div className="f space"></div>
                <img className={"minim " + currentNote} id="minim" src={minim} alt="minim" />
                <img className="trebleclef" id="trebleClef" src={trebleclef} alt="trebleclef"/>
            </div>
        </div>
    )
}

export default Stave