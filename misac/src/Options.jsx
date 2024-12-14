import { useState } from "react"
import options from "./img/options.png"
import "./Options.css"

function Options({inputKey, setKey}){
    const [optionsActive, setOptionsActive] = useState(false)
    
    const keys = ["c", "g", "d", "a", "e", "b", "f#","c#","f","b\u266d","e\u266d","a\u266d","d\u266d","g\u266d","c\u266d"]

    return(
        <div className={"options-container" + (optionsActive ? " expanded" : " collapsed")}>
            <img src={options} className="options-image" alt="options" onClick={() => setOptionsActive(!optionsActive)}/>
            <label className="select-key">Key Signature:
                <select name="key" id="select-key" className="select-key" onInput={(e) => setKey(e.target.value)} defaultValue={inputKey}>
                    {keys.map((key, index) => <option key={key + index} value={key} >{key.toLocaleUpperCase()}</option>)}
                </select>
            </label>
        </div>
    )
}

export default Options