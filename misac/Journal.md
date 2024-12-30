# Journal

## Day 1 - 11/12/2024 - Initial application build and making the keyboard

I first started working on this idea 3 years ago, but didn't manage to get past the first few days. I'm hoping that my newfound competence in React will help me get a working app, and then maybe I'll look at using it as my stepping stone into 
mobile development with React Native

As is tradition, I created the app with "npx create-react-app misac", then nuked the initial startup text and shoved a new Piano page in.
I want to keep the testing as close to implementing the functionality as possible, so I also created a Piano test suite for that purpose.
First thing's first was creating the keyboard, which I chose to do with two sets of containers.
The top half of the keyboard contains 12 notes, the 7 white whole notes and the 5 black half-notes. In order to get some good spacing, I chose to make the black notes and small white notes in this section half the size of the larger whole notes in the bottom half. The larger white notes, which only have a black note on one side, I chose to make 3/4 the size of the bottom whole notes.
Initially I did this using flex-grow, but I eventually decided that the borders didn't quite line up, so I ended up manually dictating the sizing with width:calc(X00%/28) (where X is 2 or 3). The bottom notes were a simple width:calc(100%/7)

Because of the split white notes, I wasn't able to implement hovering using purely CSS, so I decided to use the onMouseEnter to set a state which would indicate the note the cursor was over, then give the hovered note a "hovering" class.

Next step: Implement a musical notation bar above the keyboard, then serve random notes for the player to press

## Day 2 - 12/12/2024 - Creating the stave and mapping a note

Implemented music notation bar, using trebleclef and minim imgs sourced from the internet. Managed most of the placement/offset in css by eye, which may require some fiddling with later on.

Next Step: Implement clicks on the piano keys being compared to to the stave and feedback, change note if correct

## Day 3 - 13/12/2024 User Feedback and Research

Note feedback implemented. Spent most of the rest of the day researching key signatures and figuring those out in my head. Could have just looked it up and then copied & pasted, but given that a purpose of this app is to help me with that kind of music theory, I'll call it time well spent.

Next Step: Implement key change functionality

## Day 4 - 14/12/2024 - Changing the key signature

Spent today putting my research into action. Changed the key letters that show up based on what key signature has been input, and also App now compares the pressed key based on the key signature rather than defaulting to middle C.
Then I put in a floating options menu with only one setting (for the moment) to change the key signature manually.

Next Step: Add Sounds...hopefully.

## Day 5 - 15/12/2024 - Adding in piano Sounds

Downloaded sound files from https://github.com/parisjava/wav-piano-sound (scanned for viruses). Added the sounds in with use-sound library, but the audio quality is low, so will have to look at sourcing files from alternative locations.

Next Step: Add in more options, possibly more notes in the stave.

## Day 6 - 16/12/2024 - Multiple notes, volume slider

First job was to implement the volume slider, which was fairly simple - add a slider to the options menu, use it to set the volume in state and then use it as an argument in the Piano component where the sounds play. Following that I decided to work on adding multiple notes. I broke this down into 3 smaller steps: 1) Make the css and html for the note work for variable number of notes rather than hard-coding it. 2) Write the react code to take an imported number of notes option and render the notes based on that. 3) Add a number input into the options menu to set the number of notes. Job 1 was simple (and while doing so I changed the css to work from variables rather than hardcoded numbers). Job 2 was surprisingly simple as well - generating a set of notes in state and then using map to create the elements. Job 3 ended up being a little more complex - the actual number input was fairly simple, and I ended up consolidating Options into a single state object, but I struggled (as is often the case) with making React re-render the note stave when the note number was changed. In the end I chose to re-initialise the note set each time the number of notes changed.

Next Step: Add a score bar

## Day 7 - 17/12/2024 - Score bar

Slow day, for some reason I was super tired today and ended up not doing as much as I'd have liked. Did manage to implement a score bar (and made the score decay over time, so the game is more than just pressing buttons, it's pressing buttons *quickly*). Does need a more permanant high-score, though, which will be my task for tomorrow.

Next Step: Add a high score to the score bar, add key signature to the stave.

## Day 8 - 18/12/2024 - High Score and Key Signature on stave

I'm planning to do a bit of a christmas wind-down starting today, so will be moving more towards just doing the morning coding for a couple of hours. Adding the key signature was successful, I ended up being unable to find good sharp and flat images, so I chose to use utf-16 chars instead. Adding the high score bar was as simple as possible, and I also fixed a bug where the score decay wouldn't affect negative scores (which I did want to happen).

Next Step: Look into adding a second octave

## Day [9] - 19/12/2024 - Expanding the note set

Successful day! I was able to source a "full" 88 .mp3 files to give us a1-c#8. From there, I moved the note import to a separate context more for my own sanity, exporting an object that would allow me to programatically select which note to play via its name.
I added in an octave identifier to the Piano component, then an "octaves" option to the options class, which I would then use to map multiple piano components (probably shouldn't call them "piano" when there's more than one...need a better name).
From there I added an octave identfier to each note object generated in the App.css class, which passes into the stave, which I then added to the note container css class. I manually created a new set of css selectors for the new octave, moving them up to the correct bar. Convention has higher notes being rotated, so I used css transform to rotate the higher octave notes, then translated them into their correct positions. Lastly I added a dropdown box to select which of the octave options to use (4 or 4 and 5) with 4 starting at middle C.

Next Step: Move High Score and Options to local storage for continuity

## Day 10 - 20/12/2024 - Moving Options and High Score into a React Context

I made a mess of this! The actual process of moving the options into a context was easy enough, but I hadn't considered the impact it would have on the state flow - especially how the note generator would function. I want to keep the note generation working in real time as the octave and number of notes is changed, but I struggled to implement it fully, before realising I'd made messes of other things in the process. I think I'd probably be able to salvage it, but salvage leads to spaghetti. For this reason I decided to reset all the changes I'd made back to the state it was in at the end of Day 9 and come at it with a better plan tomorrow.

## Day 11 - 21/12/2024 - Moving Options and High Score into a React Context but better

Stage 1: Separate App.js into a wrapper component (App.jsx) containing the options context and a controller component (MisacPage.jsx) containing the sub-components and note press logic
Stage 2: Create an empty Options context to wrap around the MisacPage within App.jsx.
Stage 3: Add options change logic to Options context, including generateNewNoteSet.
Stage 4: Start link up the app with Options Context rather than MisacPage's options

That worked a lot better, the app now functioning as it did before, but with consolidated options. Hurrah!

Next Step: Save and load options and high score to local storage, but actually this time

## Day 11 - 22/12/2024 - Local Storage

Done. Interacting with local storage is super simple and I should probably do it more...

One thing I'd like to do is make each high score item apply to a specific option set, but how to do that is a *lot* trickier than this initial save state.

I also did some minor fixes to positions on the ledger lines and key signature notation. Turns out each sharp/flat in the key signature should be on the line of the note that's being sharpened/flattened. Who knew? (not me, clearly)

Next Step: Keybinds!

## Day 12 - 29/12/2024 - Adding Keybinds

Encountered some trouble here. Adding in some hardcoded keybinds was easy enough and I was able to make them work in fairly short order except for some weird interactions:
    1: Each time a key is pressed, the number of times the keydown event listener is called increases exponentially, including the sound, making a terrible racket from the second button press onwards. I solved this by adding in a "currently pressed note" variable that would be assigned on the first call of keyDown and then unassigned when key went up, then checking to see if it was already assigned before proceeding with the callback. Worked...except for:
    2: When the listener is only callback'd once, it ceases to play properly despite doing everything else. So the sound only plays if there's a bunch of keyboard events calling it. 
    So I tried calling the sound multiple times within a single event call, to no avail.
    Tried calling the sound within a setTimeout function...nothing. 
    Quite stumped on what could be causing this, honestly, so leaving it for today and coming back tomorrow.

Next Step: Find out what's causing the bug - try calling the event from elsewhere in the application

## Day 13 - 30/12/2024 - Fixing Keybinds

Success! All I needed to do was restructure the entire program :D.  I don't necessarily count it as a fix, but an alternative implementation. What I ended up doing was moving the entire note playback handling to the main Misac container. I also chose to move the play hook creation into the NoteContext...then struggled to get nested context to work, so I made it into an import for OptionsContext instead.

The handling in misac uses a keydown listener on the highest level container (so the entire app), but it still wasn't triggering because without a tab index the div isn't focussable so won't register the key events. So I also had to set a tabIndex={0} as well.
And now it works and nothing else could possibly go wrong...

Next Step: Add an option to map the keybinds