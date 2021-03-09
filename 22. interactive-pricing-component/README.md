# Frontend Mentor - Interactive pricing component

![Design preview for the Interactive pricing component coding challenge](./design/desktop-preview.jpg)

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers (details provided below)

## Lessons Learnt

💡 Custom styling HTML elements is difficult and hard to get right - and it takes time. I also need to consider how to include keyboard and screen reader users from the planning stage.

## Code Tips

🗒 It is possible to change the styles on one element when another element is interacted with using the relationship between the elements. In this case I changed the styles on the toggle pill when when of the sibling `inputs` was hovered over.

```
#annually:hover ~ .toggle-styles {
	background-color: var(--clr-primary-200);
}
```

## Useful Resources

🔗 CSS Tricks on [Styling Cross-Browser Compatible Range Inputs](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/). Detailed overview of issues and approaches to custom styling a HTML range input.

🔗 Stephanie Eckles on [how customize list styles](https://moderncss.dev/totally-custom-list-styles/). Have to confess to some rather blind copy and pasting on my part here...

🔗 Some pretty hectic maths and related JavaScript for [styling a the actual input range with different colors](https://jsfiddle.net/fedeghe/smjje829/) before and after the thumb, using a linear-gradient.
