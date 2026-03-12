# Technical Documentation

## Project Overview

This project is a personal portfolio website developed for Assignment 2.  
It extends Assignment 1 by adding interactive behavior, user feedback, theme customization, and smoother visual transitions.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Lucide Icons

## Implemented Features

### 1. Dark / Light Mode
A theme toggle button is included in the navigation bar.  
When the user clicks the button, the website switches between dark mode and light mode.

#### Technical Approach
- A CSS class called `light-theme` is added or removed from the `<body>`
- CSS custom properties are used to switch colors
- The selected theme is saved in `localStorage`
- On page load, the saved theme is restored automatically

### 2. Dynamic Project Filtering
The Projects section includes filter buttons:
- All
- UI
- Web App
- Mobile

When the user clicks one of these buttons, only the matching project cards are shown.

#### Technical Approach
- Each project card contains a `data-category` attribute
- JavaScript reads the selected filter and compares it to project categories
- Non-matching cards are hidden
- A filter status message is updated
- If no project matches, an empty-state message is displayed

### 3. Greeting Message
A greeting message changes depending on the current time of day.

#### Example
- Good morning
- Good afternoon
- Good evening

### 4. Contact Form Validation
The contact form validates user input before submission.

#### Validation Rules
- Name cannot be empty
- Email cannot be empty
- Email must be valid
- Message cannot be empty
- Message must contain at least 10 characters

#### User Feedback
- Field-level error messages
- Error styling on invalid inputs
- Friendly success message after valid submission
- A short "Sending message..." state

### 5. Animation and Transitions
The website includes simple transitions and reveal animations.

#### Included Effects
- Hover effects on buttons and project cards
- Smooth theme transition
- Section reveal animation when scrolling
- Smooth filter interaction feedback

## Error Handling and User Feedback

The application provides clear feedback to users:

- Invalid form input shows error messages
- Valid form input shows a success message
- Filter results update with a visible status message
- If no project matches a category, an empty-state message appears

## File Responsibilities

### `index.html`
Contains the main portfolio structure and all sections.

### `css/styles.css`
Contains:
- theme variables
- layout styling
- responsive design rules
- transitions and animations
- form states

### `js/script.js`
Contains logic for:
- greeting generation
- theme switching
- localStorage handling
- project filtering
- form validation
- reveal animation

## Future Improvements

Possible future enhancements:
- connect the form to a backend service
- add more projects with real links
- add live search
- add accessibility improvements such as keyboard focus enhancements
