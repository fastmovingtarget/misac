import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Piano from "./Piano"

describe("Piano keys render correctly", () => {
    it("displays a single octave of notes", () => {
        render(<Piano/>)

        const sharpElements = screen.getAllByText(/#/i)
        expect(sharpElements).toHaveLength(5)

        const aElements = screen.getAllByText(/a/i)
        expect(aElements).toHaveLength(3)
        const bElements = screen.getAllByText(/b/i)
        expect(bElements).toHaveLength(2)
        const cElements = screen.getAllByText(/c/i)
        expect(cElements).toHaveLength(3)
        const dElements = screen.getAllByText(/d/i)
        expect(dElements).toHaveLength(3)
        const eElements = screen.getAllByText(/e/i)
        expect(eElements).toHaveLength(2)
        const fElements = screen.getAllByText(/f/i)
        expect(fElements).toHaveLength(3)
        const gElements = screen.getAllByText(/g/i)
        expect(gElements).toHaveLength(3)
    })
    it("Changes class when hovered over", async () => {
        render(<Piano/>)

        const user = userEvent.setup();

        const cElements = screen.getAllByText("C");
        const dElements = screen.getAllByText("D");
        expect(cElements).toHaveLength(2);//top of keyboard and bottom of keyboard
        expect(cElements[0]).not.toHaveClass("hovering");
        expect(cElements[1]).not.toHaveClass("hovering");//currently not hovering

        await user.hover(cElements[0]);//move to be hovering over top c

        expect(cElements[0]).toHaveClass("hovering");
        expect(cElements[1]).toHaveClass("hovering");

        await user.hover(dElements[0]);//move off again

        expect(cElements[0]).not.toHaveClass("hovering");
        expect(cElements[1]).not.toHaveClass("hovering");

        await user.hover(cElements[1]);//move to hover over bottom c

        expect(cElements[0]).toHaveClass("hovering");
        expect(cElements[1]).toHaveClass("hovering");

    })
})