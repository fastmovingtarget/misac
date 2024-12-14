import { render, screen, act, waitFor } from '@testing-library/react';
import Stave from "./Stave"

describe("Renders visuals correctly", () => {
    it("Renders treble clef", () => {
        render(<Stave/>)

        const trebleClefElement = screen.getByAltText("trebleclef");
        expect(trebleClefElement).toBeInTheDocument()
    })
    it("Renders the note", () => {
        render(<Stave/>)

        const minimElement = screen.getByAltText("minim");
        expect(minimElement).toBeInTheDocument()
    })
    it("Alters the note class based on input note type", () => {
        render(<Stave currentNote="c"/>)

        const minimElement = screen.getByAltText("minim")
        expect(minimElement).toHaveClass("c")
    })
})