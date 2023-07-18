# Digital spaniel

Application built with CRA, Typescript, Redux and Styled components

## Project setup

1. Clone the Github repository `git clone https://github.com/adrimihailescu/digital-spaniel`.
2. Run `npm install` to install dependencies

You should now be able to run the application in a development server with:

```
npm start
```

## Project Description

1. **DATA**: Data for the entire website is coming from the **fakeCMS** where we have an object passed to the Landing page, then passed down to components through props.

2. **REDUX**: Redux RTK used for fetching the data for Card component in Testimonials section, accessed from a JSON file in the public folder available in the **redux folder**.

3. **TYPES**: There is a schema for the object fed to the entire application and types for each section, available in the **types folder**.

4. **DESIGN**: The design is trying to reflect most of the specification from the provided XD link, with small adjustments to fulfil the requirements of the technical task.

### Technical task specifications fulfilled:

➔ The top navigation section is sticky but also hide when the user scrolls down
and reappear if the user scrolls up
➔ The "Services" menu item shows the hover/active state of each menu item for the
header
➔ The header area is full screen on desktop and collapses to a hamburger style
menu on tablet and mobile viewport which slides in/out of view when clicked/tapped, taking over the screen
➔ For links (e.g. "Lets talk") there is a hover animation, text changes color and the background is filled with the underline color
➔ "Some of our recent projects" shows a tabbed slider action. (Image hover state shown on "Make Ideas Happen" project. - **missing**)
➔ "Case Studies" slider section shows an active Case Study and two further Case Studies
to the left and right (which are accessed using the arrow buttons - **missing**)
➔ "What are we all about?" section shows a masonry gallery
➔ The testimonial slider section shows the active slide, with further slides accessed using the circle buttons
➔ No tablet or mobile visuals were provided, so stacked and reduced content where appropriate inline with best practice
