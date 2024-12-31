import optionsImg from "./img/options.png"
import "./Options.css"
import {useOptions} from "./OptionsContext"

function Options({optionsActive, setOptionsActive}){
    
    const {numNotes, volume, key, keys, octaves, setOptionsHandler, keyBinds, setKeyBinds} = useOptions();

    const octaveSharp = ["c", "c\u266f", "d", "d\u266f", "e", "f", "f\u266f", "g", "g\u266f", "a", "a\u266f", "b"];
    const octaveFlat = ["c", "d\u266d", "d", "e\u266d", "e", "f", "g\u266d", "g", "a\u266d", "a", "b\u266d", "b"];

    const bindNotes = JSON.parse(octaves).map((octave) => keys[key][7].includes("\u266d") ? octaveFlat.map((element) => element + octave) : octaveSharp.map((element) => element + octave))

    const handleInput = (e) => {
        setOptionsHandler(e);
    }

    const keybindInputHandler = (e) => {
        e.preventDefault();

        const newKeyBinds = structuredClone(keyBinds);

        delete newKeyBinds[e.code]
        delete newKeyBinds[Object.keys(keyBinds).find(key => (keyBinds[key].note + keyBinds[key].octave) === e.target.name)]

        newKeyBinds[e.code] = {
                                note:e.target.name.slice(0, -1),
                                octave:Number(e.target.name.charAt(e.target.name.length - 1))
                            };

        setKeyBinds(newKeyBinds)
    }

    return(
        <div className={"options-container" + (optionsActive ? " expanded" : " collapsed")}>
            <img src={optionsImg} className="options-image" alt="options" onClick={() => setOptionsActive(!optionsActive)}/>
            <label className="select-key options-item">Key Signature:
                <select name="key" id="select-key" className="select-key" onInput={handleInput} defaultValue={key}>
                    {Object.keys(keys).map((key, index) => 
                        <option className="select-key-option" key={key + index} value={key} >{key.toLocaleUpperCase() + "\u00A0".repeat(4 - key.length) + "| " + keys[key][7]}</option>
                    )}
                </select>
            </label>
            <label className="select-volume options-item">Volume:
                <input type="range" name="volume" min="0" max="1" step="0.01" onInput={handleInput}/>
                {volume}
            </label>
            <label className="select-num-notes options-item">Number of Notes: 
                <input type="number" name="numNotes" min="1" max="12" value={numNotes} onInput={handleInput}/>
            </label>
            <label className="select-octave options-item">Octave: 
                <select name="octaves" id="select-octaves" className="select-octaves" onInput={handleInput} defaultValue={octaves}>
                        <option className="select-octaves-option" value={"[4]"} >4 - middle</option>
                        <option className="select-octaves-option" value={"[4, 5]"} >4 - middle, 5</option>
                </select>
            </label>
            <label className = "options-item">Keybinds: 
                <div className="column keybinds-container">
                    {
                        bindNotes.map((octaveBindArray) => {
                            return (
                                <div className="row keybind-octave-container">
                                    {
                                        octaveBindArray.map((note, index) => {
                                            return (
                                                <label className={"column keybind-label" + (note.includes("\u266f") || note.includes("\u266d") ? " black" : " white") }>{note}
                                                    <input 
                                                        type="text" 
                                                        name={note}
                                                        value={Object.keys(keyBinds).find(key => (keyBinds[key].note + keyBinds[key].octave) === octaveSharp[index] + note.charAt(note.length - 1)) ?? ""} 
                                                        onKeyUp={keybindInputHandler}
                                                        onKeyDown={e => e.preventDefault()}
                                                    />
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </label>
        </div>
    )
}

export default Options