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

