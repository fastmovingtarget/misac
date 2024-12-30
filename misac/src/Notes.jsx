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
import useSound from "use-sound"

function Notes(volume) {

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

    const playHooks = {
        a1:useSound(a1, {volume:volume})[0], b1:useSound(b1, {volume:volume})[0], c1:useSound(c1, {volume:volume})[0], d1:useSound(d1, {volume:volume})[0], e1:useSound(e1, {volume:volume})[0], f1:useSound(f1, {volume:volume})[0], g1:useSound(g1, {volume:volume})[0],
        a2:useSound(a2, {volume:volume})[0], b2:useSound(b2, {volume:volume})[0], c2:useSound(c2, {volume:volume})[0], d2:useSound(d2, {volume:volume})[0], e2:useSound(e2, {volume:volume})[0], f2:useSound(f2, {volume:volume})[0], g2:useSound(g2, {volume:volume})[0],
        a3:useSound(a3, {volume:volume})[0], b3:useSound(b3, {volume:volume})[0], c3:useSound(c3, {volume:volume})[0], d3:useSound(d3, {volume:volume})[0], e3:useSound(e3, {volume:volume})[0], f3:useSound(f3, {volume:volume})[0], g3:useSound(g3, {volume:volume})[0],
        a4:useSound(a4, {volume:volume})[0], b4:useSound(b4, {volume:volume})[0], c4:useSound(c4, {volume:volume})[0], d4:useSound(d4, {volume:volume})[0], e4:useSound(e4, {volume:volume})[0], f4:useSound(f4, {volume:volume})[0], g4:useSound(g4, {volume:volume})[0],
        a5:useSound(a5, {volume:volume})[0], b5:useSound(b5, {volume:volume})[0], c5:useSound(c5, {volume:volume})[0], d5:useSound(d5, {volume:volume})[0], e5:useSound(e5, {volume:volume})[0], f5:useSound(f5, {volume:volume})[0], g5:useSound(g5, {volume:volume})[0],
        a6:useSound(a6, {volume:volume})[0], b6:useSound(b6, {volume:volume})[0], c6:useSound(c6, {volume:volume})[0], d6:useSound(d6, {volume:volume})[0], e6:useSound(e6, {volume:volume})[0], f6:useSound(f6, {volume:volume})[0], g6:useSound(g6, {volume:volume})[0],
        a7:useSound(a7, {volume:volume})[0], b7:useSound(b7, {volume:volume})[0], c7:useSound(c7, {volume:volume})[0], d7:useSound(d7, {volume:volume})[0], e7:useSound(e7, {volume:volume})[0], f7:useSound(f7, {volume:volume})[0], g7:useSound(g1, {volume:volume})[0],
        "a\u266f1":useSound(a1s, {volume:volume})[0],
        "b\u266d1":useSound(a1s, {volume:volume})[0],
        "c\u266f1":useSound(c1s, {volume:volume})[0],
        "d\u266d1":useSound(c1s, {volume:volume})[0],
        "d\u266f1":useSound(d1s, {volume:volume})[0],
        "e\u266d1":useSound(d1s, {volume:volume})[0],
        "f\u266f1":useSound(f1s, {volume:volume})[0],
        "g\u266d1":useSound(f1s, {volume:volume})[0],
        "g\u266f1":useSound(g1s, {volume:volume})[0],
        "a\u266d2":useSound(g1s, {volume:volume})[0],
        "a\u266f2":useSound(a2s, {volume:volume})[0],
        "b\u266d2":useSound(a2s, {volume:volume})[0],
        "c\u266f2":useSound(c2s, {volume:volume})[0],
        "d\u266d2":useSound(c2s, {volume:volume})[0],
        "d\u266f2":useSound(d2s, {volume:volume})[0],
        "e\u266d2":useSound(d2s, {volume:volume})[0],
        "f\u266f2":useSound(f2s, {volume:volume})[0],
        "g\u266d2":useSound(f2s, {volume:volume})[0],
        "g\u266f2":useSound(g2s, {volume:volume})[0],
        "a\u266d3":useSound(g2s, {volume:volume})[0],
        "a\u266f3":useSound(a3s, {volume:volume})[0],
        "b\u266d3":useSound(a3s, {volume:volume})[0],
        "c\u266f3":useSound(c3s, {volume:volume})[0],
        "d\u266d3":useSound(c3s, {volume:volume})[0],
        "d\u266f3":useSound(d3s, {volume:volume})[0],
        "e\u266d3":useSound(d3s, {volume:volume})[0],
        "f\u266f3":useSound(f3s, {volume:volume})[0],
        "g\u266d3":useSound(f3s, {volume:volume})[0],
        "g\u266f3":useSound(g3s, {volume:volume})[0],
        "a\u266d4":useSound(g3s, {volume:volume})[0],
        "a\u266f4":useSound(a4s, {volume:volume})[0],
        "b\u266d4":useSound(a4s, {volume:volume})[0],
        "c\u266f4":useSound(c4s, {volume:volume})[0],
        "d\u266d4":useSound(c4s, {volume:volume})[0],
        "d\u266f4":useSound(d4s, {volume:volume})[0],
        "e\u266d4":useSound(d4s, {volume:volume})[0],
        "f\u266f4":useSound(f4s, {volume:volume})[0],
        "g\u266d4":useSound(f4s, {volume:volume})[0],
        "g\u266f4":useSound(g4s, {volume:volume})[0],
        "a\u266d5":useSound(g4s, {volume:volume})[0],
        "a\u266f5":useSound(a5s, {volume:volume})[0],
        "b\u266d5":useSound(a5s, {volume:volume})[0],
        "c\u266f5":useSound(c5s, {volume:volume})[0],
        "d\u266d5":useSound(c5s, {volume:volume})[0],
        "d\u266f5":useSound(d5s, {volume:volume})[0],
        "e\u266d5":useSound(d5s, {volume:volume})[0],
        "f\u266f5":useSound(f5s, {volume:volume})[0],
        "g\u266d5":useSound(f5s, {volume:volume})[0],
        "g\u266f5":useSound(g5s, {volume:volume})[0],
        "a\u266d6":useSound(g5s, {volume:volume})[0],
        "a\u266f6":useSound(a6s, {volume:volume})[0],
        "b\u266d6":useSound(a6s, {volume:volume})[0],
        "c\u266f6":useSound(c6s, {volume:volume})[0],
        "d\u266d6":useSound(c6s, {volume:volume})[0],
        "d\u266f6":useSound(d6s, {volume:volume})[0],
        "e\u266d6":useSound(d6s, {volume:volume})[0],
        "f\u266f6":useSound(f6s, {volume:volume})[0],
        "g\u266d6":useSound(f6s, {volume:volume})[0],
        "g\u266f6":useSound(g6s, {volume:volume})[0],
        "a\u266d7":useSound(g6s, {volume:volume})[0],
        "a\u266f7":useSound(a7s, {volume:volume})[0],
        "b\u266d7":useSound(a7s, {volume:volume})[0],
        "c\u266f7":useSound(c7s, {volume:volume})[0],
        "d\u266d7":useSound(c7s, {volume:volume})[0],
        "d\u266f7":useSound(d7s, {volume:volume})[0],
        "e\u266d7":useSound(d7s, {volume:volume})[0],
        "f\u266f7":useSound(f7s, {volume:volume})[0],
        "g\u266d7":useSound(f7s, {volume:volume})[0],
        "g\u266f7":useSound(g7s, {volume:volume})[0] 
    }

    return {notes, playHooks}
}

export default Notes;