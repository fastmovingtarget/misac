import { render, screen, fireEvent } from '@testing-library/react';
import {expect, jest, test} from "@jest/globals"
import userEvent from '@testing-library/user-event';
import Piano from "./Piano"

const notePressHandler = jest.fn();
const keys = {
  "c":["c", "d", "e", "f", "g", "a", "b", "\u266e"],
  "g":["c", "d", "e", "f#", "g", "a", "b", "\u266F"],
  "d":["c#", "d", "e", "f#", "g", "a", "b", "\u266F\u266F"],
  "a":["c#", "d", "e", "f#", "g#", "a", "b", "\u266F\u266F\u266F"],
  "e":["c#", "d#", "e", "f#", "g#", "a", "b", "\u266F\u266F\u266F\u266F"],
  "b":["c#", "d#", "e", "f#", "g#", "a#", "b", "\u266F\u266F\u266F\u266F\u266F"],
  "f":["c", "d", "e", "f", "g", "a", "b\u266d", "\u266d"],//\u266d is the utf-16 code for the musical flat symbol
  "b\u266d":["c", "d", "e\u266d", "f", "g", "a", "b\u266d", "\u266d\u266d"],
  "e\u266d":["c", "d", "e\u266d", "f", "g", "a\u266d", "b\u266d", "\u266d\u266d\u266d"],
  "a\u266d":["c", "d\u266d", "e\u266d", "f", "g", "a\u266d", "b\u266d", "\u266d\u266d\u266d\u266d"],
  "d\u266d":["c", "d\u266d", "e\u266d", "f", "g\u266d", "a\u266d", "b\u266d", "\u266d\u266d\u266d\u266d\u266d"]
}
const volume=0.5;

describe("Piano keys render correctly", () => {
    describe("Displays the correct notes for the key", () => {
        test("displays a single octave of notes : C", () => {
            const selectedKey = keys["c"]
            render(<Piano notePressHandler={notePressHandler} selectedKey={selectedKey} volume={volume}/>)

            selectedKey.slice(0, -1).forEach((element) => {
                const regex = new RegExp(element, "i")
                const aElements = screen.getAllByText(regex)
                expect(aElements).toHaveLength(1)
            })
        })
        test("displays a single octave of notes : G", () => {
            const selectedKey = keys["g"]
            render(<Piano notePressHandler={notePressHandler} selectedKey={selectedKey} volume={volume}/>)

            selectedKey.slice(0, -1).forEach((element) => {
                const regex = new RegExp(element, "i")
                const aElements = screen.getAllByText(regex)
                expect(aElements).toHaveLength(1)
            })
        })
        test("displays a single octave of notes : D", () => {
            const selectedKey = keys["d"]
            render(<Piano notePressHandler={notePressHandler} selectedKey={selectedKey} volume={volume}/>)

            selectedKey.slice(0, -1).forEach((element) => {
                const regex = new RegExp(element, "i")
                const aElements = screen.getAllByText(regex)
                expect(aElements).toHaveLength(1)
            })
        })
        test("displays a single octave of notes : A", () => {
            const selectedKey = keys["a"]
            render(<Piano notePressHandler={notePressHandler} selectedKey={selectedKey} volume={volume}/>)

            selectedKey.slice(0, -1).forEach((element) => {
                const regex = new RegExp(element, "i")
                const aElements = screen.getAllByText(regex)
                expect(aElements).toHaveLength(1)
            })
        })
        test("displays a single octave of notes : E", () => {
            const selectedKey = keys["e"]
            render(<Piano notePressHandler={notePressHandler} selectedKey={selectedKey} volume={volume}/>)

            selectedKey.slice(0, -1).forEach((element) => {
                const regex = new RegExp(element, "i")
                const aElements = screen.getAllByText(regex)
                expect(aElements).toHaveLength(1)
            })
        })
        test("displays a single octave of notes : B", () => {
            const selectedKey = keys["b"]
            render(<Piano notePressHandler={notePressHandler} selectedKey={selectedKey} volume={volume}/>)

            selectedKey.slice(0, -1).forEach((element) => {
                const regex = new RegExp(element, "i")
                const aElements = screen.getAllByText(regex)
                expect(aElements).toHaveLength(1)
            })
        })
        test("displays a single octave of notes : F", () => {
            const selectedKey = keys["f"]
            render(<Piano notePressHandler={notePressHandler} selectedKey={selectedKey} volume={volume}/>)

            selectedKey.slice(0, -1).forEach((element) => {
                const regex = new RegExp(element, "i")
                const aElements = screen.getAllByText(regex)
                expect(aElements).toHaveLength(1)
            })
        })
        test("displays a single octave of notes : Bflat", () => {
            const selectedKey = keys["b\u266d"]
            render(<Piano notePressHandler={notePressHandler} selectedKey={selectedKey} volume={volume}/>)

            selectedKey.slice(0, -1).forEach((element) => {
                const regex = new RegExp(element, "i")
                const aElements = screen.getAllByText(regex)
                expect(aElements).toHaveLength(1)
            })
        })
        test("displays a single octave of notes : Eflat", () => {
            const selectedKey = keys["e\u266d"]
            render(<Piano notePressHandler={notePressHandler} selectedKey={selectedKey} volume={volume}/>)

            selectedKey.slice(0, -1).forEach((element) => {
                const regex = new RegExp(element, "i")
                const aElements = screen.getAllByText(regex)
                expect(aElements).toHaveLength(1)
            })
        })
        test("displays a single octave of notes : Aflat", () => {
            const selectedKey = keys["a\u266d"]
            render(<Piano notePressHandler={notePressHandler} selectedKey={selectedKey} volume={volume}/>)

            selectedKey.slice(0, -1).forEach((element) => {
                const regex = new RegExp(element, "i")
                const aElements = screen.getAllByText(regex)
                expect(aElements).toHaveLength(1)
            })
        })
        test("displays a single octave of notes : Dflat", () => {
            const selectedKey = keys["d\u266d"]
            render(<Piano notePressHandler={notePressHandler} selectedKey={selectedKey} volume={volume}/>)

            selectedKey.slice(0, -1).forEach((element) => {
                const regex = new RegExp(element, "i")
                const aElements = screen.getAllByText(regex)
                expect(aElements).toHaveLength(1)
            })
        })
    })
    test("Changes class when hovered over", async () => {
        render(<Piano notePressHandler={notePressHandler} selectedKey={keys["c"]} volume={volume}/>)

        const user = userEvent.setup();

        const cElement = screen.getByText("C");
        const dElement = screen.getByText("D");
        expect(cElement).not.toHaveClass("hovering");

        await user.hover(cElement);//move to be hovering over top c

        expect(cElement).toHaveClass("hovering");

        await user.hover(dElement);//move off again

        expect(cElement).not.toHaveClass("hovering");

        await user.hover(cElement);//move off again

        expect(cElement).toHaveClass("hovering");
    })
    test("Changes class when clicked down", async () => {
        render(<Piano notePressHandler={notePressHandler} selectedKey={keys["c"]} volume={volume}/>)

        //const user = userEvent.setup();

        const cElement = screen.getByText("C");
        
        expect(cElement).not.toHaveClass("pressed");

        await fireEvent.mouseDown(cElement);//press mouse down on c

        expect(cElement).toHaveClass("pressed");

        expect(notePressHandler).toHaveBeenCalledWith("c")

        await fireEvent.mouseUp(cElement);//press mouse up on c

        expect(cElement).not.toHaveClass("pressed");
    })
})