import {useContext, createContext} from "react"
import a1 from "./aud/A1.mp3"
import a1s from "./aud/Bb1.mp3"
import b1 from "./aud/B1.mp3"
import c1 from "./aud/C1.mp3"
import c1s from "./aud/Db1.mp3"
import d1 from "./aud/D1.mp3"
import d1s from "./aud/Eb1.mp3"
import e1 from "./aud/E1.mp3"
import f1 from "./aud/F1.mp3"
import f1s from "./aud/Gb1.mp3"
import g1 from "./aud/G1.mp3"
import g1s from "./aud/Ab1.mp3"
import a2 from "./aud/A2.mp3"
import a2s from "./aud/Bb2.mp3"
import b2 from "./aud/B2.mp3"
import c2 from "./aud/C2.mp3"
import c2s from "./aud/Db2.mp3"
import d2 from "./aud/D2.mp3"
import d2s from "./aud/Eb2.mp3"
import e2 from "./aud/E2.mp3"
import f2 from "./aud/F2.mp3"
import f2s from "./aud/Gb2.mp3"
import g2 from "./aud/G2.mp3"
import g2s from "./aud/Ab2.mp3"
import a3 from "./aud/A3.mp3"
import a3s from "./aud/Bb3.mp3"
import b3 from "./aud/B3.mp3"
import c3 from "./aud/C3.mp3"
import c3s from "./aud/Db3.mp3"
import d3 from "./aud/D3.mp3"
import d3s from "./aud/Eb3.mp3"
import e3 from "./aud/E3.mp3"
import f3 from "./aud/F3.mp3"
import f3s from "./aud/Gb3.mp3"
import g3 from "./aud/G3.mp3"
import g3s from "./aud/Ab3.mp3"
import a4 from "./aud/A4.mp3"
import a4s from "./aud/Bb4.mp3"
import b4 from "./aud/B4.mp3"
import c4 from "./aud/C4.mp3"
import c4s from "./aud/Db4.mp3"
import d4 from "./aud/D4.mp3"
import d4s from "./aud/Eb4.mp3"
import e4 from "./aud/E4.mp3"
import f4 from "./aud/F4.mp3"
import f4s from "./aud/Gb4.mp3"
import g4 from "./aud/G4.mp3"
import g4s from "./aud/Ab4.mp3"
import a5 from "./aud/A5.mp3"
import a5s from "./aud/Bb5.mp3"
import b5 from "./aud/B5.mp3"
import c5 from "./aud/C5.mp3"
import c5s from "./aud/Db5.mp3"
import d5 from "./aud/D5.mp3"
import d5s from "./aud/Eb5.mp3"
import e5 from "./aud/E5.mp3"
import f5 from "./aud/F5.mp3"
import f5s from "./aud/Gb5.mp3"
import g5 from "./aud/G5.mp3"
import g5s from "./aud/Ab5.mp3"
import a6 from "./aud/A6.mp3"
import a6s from "./aud/Bb6.mp3"
import b6 from "./aud/B6.mp3"
import c6 from "./aud/C6.mp3"
import c6s from "./aud/Db6.mp3"
import d6 from "./aud/D6.mp3"
import d6s from "./aud/Eb6.mp3"
import e6 from "./aud/E6.mp3"
import f6 from "./aud/F6.mp3"
import f6s from "./aud/Gb6.mp3"
import g6 from "./aud/G6.mp3"
import g6s from "./aud/Ab6.mp3"
import a7 from "./aud/A7.mp3"
import a7s from "./aud/Bb7.mp3"
import b7 from "./aud/B7.mp3"
import c7 from "./aud/C7.mp3"
import c7s from "./aud/Db7.mp3"
import d7 from "./aud/D7.mp3"
import d7s from "./aud/Eb7.mp3"
import e7 from "./aud/E7.mp3"
import f7 from "./aud/F7.mp3"
import f7s from "./aud/Gb7.mp3"
import g7 from "./aud/G7.mp3"
import g7s from "./aud/Ab7.mp3"

const NoteContext = createContext()

function NoteProvider({children}) {

    const notes = {
        a1, b1, c1, d1, e1, f1, g1,
        a2, b2, c2, d2, e2, f2, g2,
        a3, b3, c3, d3, e3, f3, g3,
        a4, b4, c4, d4, e4, f4, g4,
        a5, b5, c5, d5, e5, f5, g5,
        a6, b6, c6, d6, e6, f6, g6,
        a7, b7, c7, d7, e7, f7, g7,
        "a\u266f1":a1s,
        "b\u266d1":a1s,
        "c\u266f1":c1s,
        "d\u266d1":c1s,
        "d\u266f1":d1s,
        "e\u266d1":d1s,
        "f\u266f1":f1s,
        "g\u266d1":f1s,
        "g\u266f1":g1s,
        "a\u266d2":g1s,
        "a\u266f2":a2s,
        "b\u266d2":a2s,
        "c\u266f2":c2s,
        "d\u266d2":c2s,
        "d\u266f2":d2s,
        "e\u266d2":d2s,
        "f\u266f2":f2s,
        "g\u266d2":f2s,
        "g\u266f2":g2s,
        "a\u266d3":g2s,
        "a\u266f3":a3s,
        "b\u266d3":a3s,
        "c\u266f3":c3s,
        "d\u266d3":c3s,
        "d\u266f3":d3s,
        "e\u266d3":d3s,
        "f\u266f3":f3s,
        "g\u266d3":f3s,
        "g\u266f3":g3s,
        "a\u266d4":g3s,
        "a\u266f4":a4s,
        "b\u266d4":a4s,
        "c\u266f4":c4s,
        "d\u266d4":c4s,
        "d\u266f4":d4s,
        "e\u266d4":d4s,
        "f\u266f4":f4s,
        "g\u266d4":f4s,
        "g\u266f4":g4s,
        "a\u266d5":g4s,
        "a\u266f5":a5s,
        "b\u266d5":a5s,
        "c\u266f5":c5s,
        "d\u266d5":c5s,
        "d\u266f5":d5s,
        "e\u266d5":d5s,
        "f\u266f5":f5s,
        "g\u266d5":f5s,
        "g\u266f5":g5s,
        "a\u266d6":g5s,
        "a\u266f6":a6s,
        "b\u266d6":a6s,
        "c\u266f6":c6s,
        "d\u266d6":c6s,
        "d\u266f6":d6s,
        "e\u266d6":d6s,
        "f\u266f6":f6s,
        "g\u266d6":f6s,
        "g\u266f6":g6s,
        "a\u266d7":g6s,
        "a\u266f7":a7s,
        "b\u266d7":a7s,
        "c\u266f7":c7s,
        "d\u266d7":c7s,
        "d\u266f7":d7s,
        "e\u266d7":d7s,
        "f\u266f7":f7s,
        "g\u266d7":f7s,
        "g\u266f7":g7s
    }

    return (
        <NoteContext.Provider value={notes}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteProvider;

export const useNotes = () => {
    return useContext(NoteContext);
}