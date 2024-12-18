import { render, screen, act, waitFor } from '@testing-library/react';
import Stave from "./Stave"

const currentNoteSet = [{
    noteKeyIndex:0,
    note:"c",
    state:"successful"
  }, {
    noteKeyIndex:1,
    note:"d",
    state:"unsuccessful"
  }, {
    noteKeyIndex:1,
    note:"e",
    state:""
  }];

const numNotes = 2;
const keyNotation = "\u266d\u266d\u266d"

describe("Renders visuals correctly", () => {
    it("Renders treble clef", () => {
        render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotation}/>)

        const trebleClefElement = screen.getByAltText("trebleclef");
        expect(trebleClefElement).toBeInTheDocument()
    })
    it("Renders the notes", () => {
        render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotation}/>)

        const minimElement = screen.getAllByAltText("minim");
        expect(minimElement).toHaveLength(currentNoteSet.length)
    })
    it("Alters the note class based on input note type", () => {
        render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotation}/>)

        const minimElement = screen.getAllByAltText("minim")
        expect(minimElement[0]).toHaveClass("c")
        expect(minimElement[1]).toHaveClass("d")
        expect(minimElement[2]).toHaveClass("e")
    })
    it("Alters the note class based on input note state", () => {
        render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotation}/>)

        const minimElement = screen.getAllByAltText("minim")
        expect(minimElement[0]).toHaveClass("successful")
        expect(minimElement[1]).toHaveClass("unsuccessful")
        expect(minimElement[2]).not.toHaveClass("successful")
        expect(minimElement[2]).not.toHaveClass("unsuccessful")
    })
    describe("Renders the key signature notation:", () => {
        test("natural",() => {
            const keyNotationTest = "\u266e"
            render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotationTest}/>)
    
            const keyElement = screen.queryAllByText(keyNotationTest[0]);
            expect(keyElement).toHaveLength(0)
        })
        test("1sharp",() => {
            const keyNotationTest = "\u266f"
            render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotationTest}/>)
    
            const keyElement = screen.queryAllByText(keyNotationTest[0]);
            expect(keyElement).toHaveLength(1)
        })
        test("2sharp",() => {
            const keyNotationTest = "\u266f\u266f"
            render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotationTest}/>)
    
            const keyElement = screen.queryAllByText(keyNotationTest[0]);
            expect(keyElement).toHaveLength(2)
        })
        test("3sharp",() => {
            const keyNotationTest = "\u266f\u266f\u266f"
            render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotationTest}/>)
    
            const keyElement = screen.queryAllByText(keyNotationTest[0]);
            expect(keyElement).toHaveLength(3)
        })
        test("4sharp",() => {
            const keyNotationTest = "\u266f\u266f\u266f\u266f"
            render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotationTest}/>)
    
            const keyElement = screen.queryAllByText(keyNotationTest[0]);
            expect(keyElement).toHaveLength(4)
        })
        test("5sharp",() => {
            const keyNotationTest = "\u266f\u266f\u266f\u266f\u266f"
            render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotationTest}/>)
    
            const keyElement = screen.queryAllByText(keyNotationTest[0]);
            expect(keyElement).toHaveLength(5)
        })
        test("1flat",() => {
            const keyNotationTest = "\u266d"
            render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotationTest}/>)
    
            const keyElement = screen.queryAllByText(keyNotationTest[0]);
            expect(keyElement).toHaveLength(1)
        })
        test("2flat",() => {
            const keyNotationTest = "\u266d\u266d"
            render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotationTest}/>)
    
            const keyElement = screen.queryAllByText(keyNotationTest[0]);
            expect(keyElement).toHaveLength(2)
        })
        test("3flat",() => {
            const keyNotationTest = "\u266d\u266d\u266d"
            render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotationTest}/>)
    
            const keyElement = screen.queryAllByText(keyNotationTest[0]);
            expect(keyElement).toHaveLength(3)
        })
        test("4flat",() => {
            const keyNotationTest = "\u266d\u266d\u266d\u266d"
            render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotationTest}/>)
    
            const keyElement = screen.queryAllByText(keyNotationTest[0]);
            expect(keyElement).toHaveLength(4)
        })
        test("5flat",() => {
            const keyNotationTest = "\u266d\u266d\u266d\u266d\u266d"
            render(<Stave currentNoteSet={currentNoteSet} numNotes={numNotes} keyNotation={keyNotationTest}/>)
    
            const keyElement = screen.queryAllByText(keyNotationTest[0]);
            expect(keyElement).toHaveLength(5)
        })
    })
})