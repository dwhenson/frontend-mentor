# Frontend Mentor - Testimonials grid section

![Design preview for the Testimonials grid section coding challenge](./design/desktop-preview.jpg)

## The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size

## Lessons Learnt

💡 I need to think about the functionality that I want from the grid before starting to add in rules and hoping for the right result. I also need to look into `min-content` verses `auto` and why this impacts row height. 

## Code Tips

🗒 When varying the only the opacity on a common color using CSS custom properties separate out the color values from the color prefix, as per the following example:

```
:root {
  --color: 240, 240, 240;
}

#element {
  background-color: rgba(var(--color), 0.8);
}
```
