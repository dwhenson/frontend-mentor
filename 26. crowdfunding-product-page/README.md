# Frontend Mentor - Crowdfunding product page

![Design preview for the Crowdfunding product page coding challenge](./design/desktop-preview.jpg)

## The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

## Lessons Learnt and Future Development

💡 More planning from the outset is needed to consider a11y and interactions, and the impacts that this will have on the HTML structure. Trying to adapt the HTML at a later stage is complicated and forces me down a track. I also need to learn SCSS and JavaScript modules to enable better code organisation

💡 I need a specific strategy to provide the 'hook' between HTML and JavaScript for DOM manipulation. Near the end of this challenge I got the advice to use the `data-` attributes for this. I tested this and it seemed to work really well. Combined with the convention of prefixing a class name with `js-` when added by JavaScipt will help make things clearer.

## Useful Resources

🔗 Top plugin recommendations include: Micromodal.js [a lightweight, configurable and a11y-enabled modal library](https://micromodal.now.sh/) and [A11y Dialog](https://micromodal.now.sh/) from Kitty Giraudel. I didn't use a plugin this time around but might in future.

🔗 I basically followed this approach from [A11y Casts](https://www.youtube.com/watch?v=JS68faEUduk&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=30). I didn't trap focus, but [this helper function](https://piccalil.li/quick-tip/load-all-focusable-elements-with-javascript) from Andy Bell would make this not too difficult.
