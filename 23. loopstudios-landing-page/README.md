# Frontend Mentor - Loopstudios landing page

![Design preview for the Loopstudios landing page coding challenge](./design/desktop-preview.jpg)

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page

## Lessons Learnt and Future Development

💡 I wanted to work on my ability to position and layout images. This challenge was a great opportunity for this. I still need to pay attention to this in future challenges as I am not yet 100% comfortable with this.

💡 Getting stronger at JavaScript will enable me to write more robust and efficient code. The use of a proxy to listen for state changes is very powerful; I would love to get the position when I can build something like this from scratch.

## Code Tips

🗒 There are two good ways to add a dark overlay to an image.

1. If the image is a background image, this can be done purely in CSS using variations on the following code:

```
	background:
			linear-gradient(hsla(200, 16%, 18%, 0.6), hsla(200, 16%, 18%, 0.2)),
			center/cover url("../images/desktop/image-hero.jpg") hsla(295, 51%, 18%, 1);
```

The linear gradient provides the overlaid color (in this case I made it darker at the top where the white text is), the final colour provides a fallback.

2. In the case of an `img` the dark overlay can be achieved by setting the background color and then lowering the opacity of the `img`. A light background colour will make the image appear lighter (as per the hover effect in the gallery)

🗒 In order to make an image fill a specific element, `object-fit: cover` normally works, but if the image is inside a `picture` tag, setting the image width to 100% and adjusting the height also seems to work. At a push, setting the picture to `display: flex` also seems to work.

## Useful Resources

🔗 Andy Bell on [developing a progressively enhanced burger menu](https://piccalil.li/premium/build-a-fully-responsive-progressively-enhanced-burger-menu/). Second time using Andy's approach and I like it more each time. I reached outside the component make it so the logo would always be visible, which is not ideal but I couldn't think of a better approach.

🔗 A nice short walk through on [how add a dark overlay to images](https://dev.to/ellen_dev/two-ways-to-achieve-an-image-colour-overlay-with-css-eio). I used both approaches in this challenge and found they worked well.
