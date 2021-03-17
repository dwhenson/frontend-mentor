# Frontend Mentor - Maker pre-launch landing page solution

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page

## Lessons Learnt and Future Development

💡 .svg files remain an issue. Sizing the four main icons in the main page was challenging as one of them was wider and lower than the others. I solved this by adding some extra padding so the sizes match up. This felt a bit hacky and I think there must be better way.

💡 It seems that a the best way to deal with sections that have a background image or colour is to allow it to span the full width of the viewport rather than constrain them along with the rest of the content (see below for details).

## Code Tips

🗒 To stop icons shrinking just add `flex-shrink: 0` to each icon. This forces them to at least maintain a minimum size and avoids problems of them shrinking when you don't want them to. 

🗒 To allow content with a background to expand the full width of the viewport, if the `center-content` utility class has been applied, then this can be done by adding `grid-column: 1/ -1` to the relavent sections providing they are direct children of the element with the `center-content` utility.

