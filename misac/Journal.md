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

## Day 4

Note feedback implemented. Spent most of the rest of the day researching key signatures and figuring those out in my head. Could have just looked it up and then copied & pasted, but given that a purpose of this app is to help me with that kind of music theory, I'll call it time well spent.

Next Step: Implement key change functionality

## Day 5 - 14/12/2024 - Changing the key signature

Spent today putting my research into action