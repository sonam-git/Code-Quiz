# Code-Quiz
The main purpose of this project is to tackle the challange to create the quiz application using the javaScript skills and knowledge you learned from the class.
# Description
This project invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will 
feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface.
## User Story
* AS A coding boot camp student
* I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
* SO THAT I can gauge my progress compared to my peers
## Acceptance Criteria
* GIVEN I am taking a code quiz
* WHEN I click the start button
* THEN a timer starts and I am presented with a question
* WHEN I answer a question
* THEN I am presented with another question
* WHEN I answer a question incorrectly
* THEN time is subtracted from the clock
* WHEN all questions are answered or the timer reaches 0
* THEN the game is over
* WHEN the game is over
* THEN I can save my initials and score
# Motivation
This motivates you to showcase the skills and knowledge you learned such as using Web APIs to create, get, and append elements as well as set attributes and work with timers while 
reinforcing your existing JavaScript skills. Also adding event listeners to a DOM element, cancel default events, and stop event propagation, and storing data locally within user's browser. 
This project also work together to build a timer that reinforces new DOM manipulation and Web API skills.
# Technologies Used
* HTML
* CSS
* JavaScript
# Build Status
We have to start this project from scratch using three different technologies, and it was quite challanging to work on it, and at the sametime it gave us
an oppertunity to practice the knowledge we learned and polish it as much as possible.
# code Style
## HTML
* Linked CSS file in the head section.
* Header section with three divs, one of them have included button for Score Board, one for heading h1, and the last one for time.
* There are 4 section element within the main element : First one includes instruction for the quiz and start button. Second one for Question
   and Answer. Third one to show final score, where it has an input textarea to add your initials using submit button. Fourth one includes to render
   scorelist from highest to lowest, as well as two button called Go back & Clear All.
* Linked JS file at the bottom of the Body section.

## CSS
* Created variables for different types of color used for UI/UX
* Use flex box properties for different section render dynamically or statically.
* Added pseudo class hover added to the all the buttons in order to make it user friendly.
* Responsive in smaller screen.
* Added reset.css file.

## JavaScript
* Created an array of objects containing 5 objects (  object property and value contains : questions / choice of answers [ ] / correct answers ).
* variable declaration as per acceptance criteria using querySelector() method.
* Used either ID or Class to grab the html elements for querySelector () method.
* Set variable questionCount = 0 for questions and set empty array scoreList[] to store user score during each quiz.
* Created timer function setTime() with the secondLeft = 60 sec, and delay value 1000 miliseconds.
* Created setQuestion function with parameter id to display question and choice of answers.
* Created checkAnswer function to check whether user click on right or wrong answer using event method accompanied with .forEach() method.
* Created a startQuiz function which dynamically display the question answer section invoking the function setQuestion() and setTime().
* Used if else conditional statements to check the answers, display question list.
* Created addScore event function to add socre using push method and sort method to check for score comparision and dispay accordingly.
* Scorelist element displayed using innerHTML.
* Created function storeStores using localStorage.setItem method accompanied with JSON.stringify method.
* Created function displayScores using localStorage.getItem accompanied with JSON.parse method.
* Created function clearScores to clear the storage using localStorage.clear() method.
* added addEventListener function to all the button and working properly as per requirements.

# Screenshots
### Start Quiz
![starting Screen](https://user-images.githubusercontent.com/89502092/222991894-2f33f099-4223-46e9-b3ff-fcda430a6e68.png)
### Question & Answer 
![question answer](https://user-images.githubusercontent.com/89502092/222991911-1c3e1677-cc41-4718-ab59-f73a03fa5a8f.png)
### Add Initials & Score
![initial   score](https://user-images.githubusercontent.com/89502092/222991938-1ee41f6f-6619-4ceb-9082-e8adf02be71f.png)
### Update Scorelist & Render
![socre list](https://user-images.githubusercontent.com/89502092/222991956-b074ce4d-8109-47e5-a78b-d897fd1a2181.png)
### Responsive view
![Responsive](https://user-images.githubusercontent.com/89502092/222991974-edb88c96-df56-4032-8741-ac6ef759f7fa.png)

# Github URL:
https://github.com/sonam-git/Code-Quiz
# Deployed Live URL:
 https://sonam-git.github.io/Code-Quiz/
# License
N/A
