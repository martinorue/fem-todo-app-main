# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](/screencapture_desktop.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/martinorue/fem-todo-app-main)
- Live Site URL: [Add live site URL here](https://fem-todo-app-main.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://react.dev/) - JS library
- [React-easy-edit](https://www.npmjs.com/package/react-easy-edit)
- [React-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)
- [React-icons](https://www.npmjs.com/package/react-icons)

### What I learned

For this project, I was excited to meet all the requirements 😄🎯, and I also wanted to add some extras to practice new techniques 🚀🔥.

It's the first React project I upload to this platform, so there are probably many things to improve in the code. 😅

I added the ability to edit the task ✏️✅, as well as a menu with options to sort the list 📋⬆️⬇️.

On the other hand, I used the CSS property: 
```css 
  overflow-y: auto;
``` 
to add a scrollbar to the task list, so the container wouldn't become too tall 📜🔽.

I also flirted with using animations, for which I still don't feel completely confident, but I want to start learning more about that topic to incorporate it into future projects 💃📚🌟.

It was also my first time handling the switch from dark mode to light mode 🌗🌞, where basically I add a class to my container with the 'app' class, and then reassigning CSS variables according to the theme:
```css
  .is-light-theme {
    --dark-theme-bg-mobile-img: var(--light-theme-bg-mobile-img);
    --dark-theme-bg-desktop-img: var(--light-theme-bg-desktop-img);
    --very-dark-desaturated-blue: var(--very-light-gray);
    --very-dark-blue: var(--very-light-grayish-blue);
    --dark-grayish-blue: var(--light-grayish-blue);
    --dark-mode-light-grayish-blue: var(--light-mode-very-dark-grayish-blue);
    --midnight-blue: var(--very-light-grayish-blue);
    --dark-grayish-blue: var(--medium-dark-grayish-blue);
    --shadow-dark-theme: var(--shadow-light-theme);
    --dark-mode-light-grayish-blue-hover: var(--light-grayish-blue)
}
```

### Useful resources

- [React Context](https://react.dev/learn/passing-data-deeply-with-context)
- [useContext](https://react.dev/reference/react/useContext) - Examples of updating context
- [Removing input background colour for Chrome autocomplete](https://stackoverflow.com/questions/2781549/removing-input-background-colour-for-chrome-autocomplete)
- [Shadow Palette Generator](https://www.joshwcomeau.com/shadow-palette/)
- [Borders with linear gradient](https://www.youtube.com/shorts/U7HTX-CLOUc)
- [AI search engine for developers](https://www.phind.com/)

## Author

- Frontend Mentor - [@martinorue](https://www.frontendmentor.io/profile/martinorue)