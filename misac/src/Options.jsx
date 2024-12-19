import { useState } from "react"
import optionsImg from "./img/options.png"
import "./Options.css"

function Options({keys, options, setOptionsHandler}){
    const [optionsActive, setOptionsActive] = useState(false)
    
    const handleInput = (e) => {
        setOptionsHandler(e);
    }

    return(
        <div className={"options-container" + (optionsActive ? " expanded" : " collapsed")}>
            <img src={optionsImg} className="options-image" alt="options" onClick={() => setOptionsActive(!optionsActive)}/>
            <label className="select-key options-item">Key Signature:
                <select name="key" id="select-key" className="select-key" onInput={handleInput} defaultValue={options.key}>
                    {Object.keys(keys).map((key, index) => 
                        <option className="select-key-option" key={key + index} value={key} >{key.toLocaleUpperCase() + "\u00A0".repeat(4 - key.length) + "| " + keys[key][7]}</option>
                    )}
                </select>
            </label>
            <label className="select-volume options-item">Volume:
                <input type="range" name="volume" min="0" max="1" step="0.01" onInput={handleInput}/>
                {options.volume}
            </label>
            <label className="select-num-notes options-item">Number of Notes: 
                <input type="number" name="numNotes" min="1" max="12" value={options.numNotes} onInput={handleInput}/>
            </label>
            <label className="select-octave options-item">Octave: 
                <select name="octaves" id="select-octaves" className="select-octaves" onInput={handleInput} defaultValue={options.octaves}>
                        <option className="select-octaves-option" value={"[4]"} >4 - middle</option>
                        <option className="select-octaves-option" value={"[4, 5]"} >4 - middle, 5</option>
                </select>
            </label>
        </div>
    )
}

export default Options