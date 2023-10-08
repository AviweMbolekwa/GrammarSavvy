# GrammarSavvy

![mockup](/assets/images/readme/GrammarSavvy.jpg)

- GrammarSavvy is a web application game that tests the user's vocabulary by asking them to make 
words from a random selection of letters.

## Live Project
[View the live project](https://aviwembolekwa.github.io/GrammarSavvy)

---
## Table of contents

- [User experience](https://github.com/AviweMbolekwa/GrammarSavvy#user-experience)
   - [User stories](https://github.com/AviweMbolekwa/GrammarSavvy#user-stories)
- [Features](https://github.com/AviweMbolekwa/GrammarSavvy#features)
- [Technologies used](https://github.com/AviweMbolekwa/GrammarSavvy#technologies-used)
   - [Languages used](https://github.com/AviweMbolekwa/GrammarSavvy#languages-used)
   - [Frameworks, Libraries and programs](https://github.com/AviweMbolekwa/GrammarSavvy#frameworks-libraries-and-programs-used)
   - [Application Programming Interface (API's)](https://github.com/AviweMbolekwa/GrammarSavvy#apis-used)
- [Testing](https://github.com/AviweMbolekwa/GrammarSavvy#testing)
- [Credits](https://github.com/AviweMbolekwa/GrammarSavvy#credits)
   - [Code](https://github.com/AviweMbolekwa/GrammarSavvy#code)
   - [Acknowledgements](https://github.com/AviweMbolekwa/GrammarSavvy#acknowledgements)
---
## User experience

### User stories
1. As a First Time Visitor, I want to be able to easily understand the purpose of the site and understand the rules
         of the game.
2. As a First Time Visitor, I want to be able to easily navigate through the site, find and interact with the content available.        
3. As a First Time Visitor, I want to play the game quickly, and with minimal effort.       
4. As a First Time Visitor, I want to be able to easily tell if I have succeeded or failed at the goal of the game.        
5. As a First Time Visitor, I want to be able to adjust or mute the volume of the game as I so choose.       
6. As a First Time Visitor, I want to control exactly when the game/timer starts, so I'm not unduly thrust into a game
        experience that I'm not prepared for.          
7. As a First Time visitor I want to clear track my progress through the game.       
---
## Features
-   Responsive on all device sizes
-   Interactive elements
-   Adjustable difficulty
-   Sounds that can activated/deactivated at any time
-   Volume that can be adjusted at any time
-   Makes use of local storage to save data
---
## Technologies Used

### Languages Used
-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Lakki Ready', 'PT Sans' & 'Hind Siliguri' fonts into the style.css file which is 
    used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [Bootstrap Icons:](https://icons.getbootstrap.com/)
    - Bootstrap Icons was also used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery, along with being an integral part of the Bootstrap which was used for the modal and offcanvas elements, was also
    used whenever possible in the JavaScript file for the game functionality.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
  
### APIs Used
-   The [Free Dictionary API](https://dictionaryapi.dev/) was used to validate whether user inputs were real words or not.
-   The [EmailJS API](https://www.emailjs.com/) was used to send messages to the creator should there be any words that
are erroneously not accepted through the dictionary API the user wants to report, or if they want to get in touch for any 
other reason.
---
## Testing
- Please refer [here](https://github.com/AviweMbolekwa/GrammarSavvy/blob/main/TESTING.md) for more information on testing of the GitFinder website.
---
## Credits

### Code
-  [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/): Bootstrap Library used throughout the project to make site responsive using the Bootstrap Grid System. It was used in many different places all over the site, but in particular for the modals and the offcanvas.

-   [DelftStack](https://www.delftstack.com/howto/javascript/shuffle-array-javascript/): Introduced me to and provided with some of the base code for a [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) which I used to randomise the order of the letters generated by the anagram generator function.

-    [Stack Overflow](https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript): Provided the basis of the code for which I used the games timer. 

-   [W3 Schools](https://www.w3schools.com/howto/howto_css_switch.asp): As noted in the stylesheet  this code provided the basis of the code that I used to design and style the volume toggle bar. It is not too dissimilar from the default Bootstrap toggle switch, however, it is much easier to apply custom colours and styles.

-   [Bananacoding](https://www.youtube.com/channel/UCXvIGbH6QsPJYtwzQvwhFyw): The code that I used to style and create the volume slider was inspired mainly from [this Youtube tutorial video](https://www.youtube.com/watch?v=BrpiNUf2XCk).
---
### Acknowledgements
-   Close friends along the way who helped test and give advice.
