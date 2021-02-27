# Frontend Mentor - File Transfer pricing component

![Design preview for the File Transfer pricing component coding challenge](./design/desktop-preview.jpg)

## The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

## Lessons Learnt

💡 Look the the functionality of the component without considering how it looks to identify the most appropriate HTML to use. (For example, this toggle is better as a radio button).<br/>
💡 I think this could be done without JS using a `monthly:checked ~ .price` or `monthly:checked > .price` selectors, but this would require a massive code restructure. Again better planning from the outset might have enabled me to do this.<br/>

## Code Tips

🗒 Creating an "pop-out" element as shown in the middle pricing plan can be done by simply adding some extra padding. If the "smaller" elements are in the same parent element this should have the desired effect.<br/>

## Useful Resources

🔗 Scott o'Hara on [Accessible Styled Form Controls](https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/). To the point simple explanation of creating a custom radio switch.<br/>
🔗 Sara Soueidan a detailed article on [Designing and Building Toggle Switches](https://www.sarasoueidan.com/blog/toggle-switch-design/). Lots of background and in-depth explanation.<br/>
🔗 Andy Bell with his usual super in-depth approach to [building a toggle switch](https://piccalil.li/tutorial/solution-002-toggle-switch) (using a checkbox rather than radio button in this case).<br/>
