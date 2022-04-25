# Company-profile-generator

## About

This challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. 

## Description
Build an application based on Node.js. It is a Team Profile Generator which allows to input the information about a team and  generates an HTML webpage that displays summaries for each person. 

## Installation

- Type in terminal npm i or npm install to install dependency packages needed.
- Ensure the following packages are installed.
   1. Inquirer: npm install inquirer
    2. Jest : npm i jest -g (globally install jest)

- Navigate to index.js file in terminal
- Input node app.js in the terminal to initiate the application
- Add the team members like Engineer, Manager and Interns by answering all the required prompts.
- When all the members are added, the HTML page is generated in 'dist' folder from where we can view the page in browser.
- To test the application use 'npm test' command in terminal. 

## User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated


## Screenshot
![Picture1](https://user-images.githubusercontent.com/94458512/164998675-43cc0b4e-fdd9-4690-9354-44e56101d1e2.png)
)

## Walkthrough video of Team Profile Generator page

![GIF](./images/team%20Profile%20Gen.gif) 

https://drive.google.com/file/d/16-MU6_x8-_cIwcFXNhneIXRg-B2xkFAM/view

Walkthrough video demonstrates the following criteria:
- All four test (Employee, Manager, Engineer and Inter) passing from the command line

- How a user would invoke the application from the command line.

- How a user would enter responses to all of the prompts in the application.

- A generated HTML file that matches the user input.

## Links to the challenge application

- GitHub Repository URL: 
https://github.com/ReemMDA99/Company-profile-generator

- Link to the sample HTML file generated using application URL: 
https://github.com/ReemMDA99/Company-profile-generator/blob/develop/dist/index.html

- Link to the Walkthrough video using Google Drive URL:
https://drive.google.com/file/d/16-MU6_x8-_cIwcFXNhneIXRg-B2xkFAM/view

## Tests
Run npm test to run Jest for tests on constructors.

## License
This application is protected by following License: 

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Contributor

Reem Ahmed : reem.mda0909@gmail.com