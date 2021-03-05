# Frontend Mentor - Social media dashboard with theme switcher

![Design preview for the Social media dashboard with theme switcher coding challenge](./design/desktop-preview.jpg)

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

## Lessons Learnt

💡 Providing a custom property on the `:root` that changes inside the `prefers-color-scheme` media query provides a hook for JavaScipt that then allows for tailoring changes against the 'state' that the CSS is displaying

## Code Tips

🗒 The `border-radius` property doesn't work with the `border-image` property. If you need the same effect then use pseudo elements to achieve this (don't forget to include the `position` property to move them around easily!!).
🗒 To move the toggle if the user system preferences are set to dark mode use the `click()` method rather than `checked = true` (only the first of these fires the change event and influences the connected CSS)

## Useful Resources

Big appreciation for [Andy Bell's](https://piccalil.li) tutorials here!

🔗 Andy Bell on [making an accessible toggle switch](https://piccalil.li/tutorial/solution-002-toggle-switch). Usual massively in-depth ultimate edge case catered for approach from Andy.

🔗 Andy Bell on [how to get a CSSS custom property with JavaScipt](https://piccalil.li/tutorial/get-css-custom-property-value-with-javascript). Have to confess to some rather blind copy and pasting on my part here...

🔗 Andy Bell on [creating a user controlled dark or light mode](https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode). A great resource, I've not yet added in the `localStorage` to retain the users preferences on page load.
