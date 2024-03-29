
// create Manager card
const Manager = require('../lib/Manager');
const createManagerCard = function (Manager) {
    return `
    <div class="card border border border-info rounded-left h-100" style="width: 20rem">
        <div class="card-heading bg-info text-white">
            <h4 class ="card-role">
                ${Manager.getName()}
            </h4>
            <br/>
            <h5 class = "card-icon">
                ${Manager.getRole()}
                <i class="fas fa-mug-hot"></i>
            </h5>
        </div>

        <div class= "card-main">
            <p class= "id"> Employee ID: ${Manager.getId()}</p>
            <p class= "email"> Email: <a href="mailto: ${Manager.getEmail()}">${Manager.getEmail()}</a> </p>
            <p class= "office"> Office Number: ${Manager.getOfficeNumber()}</p>
        </div>

    </div>   

    `;
}
// create Engineer card
const Engineer = require ('../lib/Engineer');
const createEngineerCard = function (Engineer) {
    return `
    <div class="card border border border-info rounded-left h-100" style="width: 20rem">
        <div class="card-heading bg-info text-white">
            <h4 class ="card-role">
                ${Engineer.getName()}
            </h4>
            <br/>
            <h5 class = "card-icon">
                ${Engineer.getRole()}
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                    <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                  </svg>
            </h5>
        </div>

        <div class= "card-main">
            <p class= "id"> Employee ID: ${Engineer.getId()}</p>
            <p class= "email"> Email: <a href="mailto: ${Engineer.getEmail()}">${Engineer.getEmail()}</a></p>
            <p class= "github"> Github Username: <a href="https://github.com/${Engineer.getGitHub()}" target="_blank">${Engineer.getGitHub()}</a></p>
        </div>

    </div>   
     
    `;
}


// create Intern card
const Intern = require('../lib/Intern');
const createInternCard = function(Intern) {
    return `
    <div class="card border border border-info rounded-left h-100" style="width:20rem">
        <div class="card-heading bg-info text-white">
            <h4 class ="card-role">
                ${Intern.getName()}
            </h4>
            <br/>
            <h5 class = "card-icon">
                ${Intern.getRole()}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                  </svg>
            </h5>
        </div>
        <div class= "card-main">
            <p class= "id"> Employee ID: ${Intern.getId()}</p>
            <p class= "email"> Email: <a href="mailto: ${Intern.getEmail()}">${Intern.getEmail()}</a> </p>
            <p class= "school"> School: ${Intern.getSchool()}</p>
        </div>

    </div>   
     
    `;
}

 // create a loop for all of the employees
 function createCards(team) {
    let page = []
    for (let i = 0; i < team.length; i++) {
    const teamMembers = team[i];
        switch(teamMembers.getRole()) {
            // call manager function
            case 'Manager' :
            const manager = new Manager(teamMembers.name, teamMembers.id, teamMembers.email, teamMembers.officeNumber);
            page.push(createManagerCard(manager));
            break;
            // call engineer function
            case 'Engineer' :
            const engineer = new Engineer(teamMembers.name, teamMembers.id, teamMembers.email, teamMembers.githubUsername);
            page.push(createEngineerCard(engineer));
            break;
            // call intern function 
            case 'Intern' :
            const intern = new Intern(teamMembers.name, teamMembers.id, teamMembers.email, teamMembers.school);
            page.push(createInternCard(intern));
            break;
        }
    }
    // joining strings 
    return page.join(``)
}
// generate team page
const generateTeamPage = function(team) {
    console.log(team)
    return`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css" />
    <title>Company Team Profile Generator</title>
</head>

<body>
    <header>
        <div class="jumbotron bg-danger text-white">
        <div class="container">
        <h1 class="display-4 text-center">Team Profile</h1>
    </div>
    </div>
    </header>
    <main>
        <div class="justify-content-center d-flex flex-row flex-wrap">
            ${createCards(team)}
        </div>
    </main>
    <footer>
        <div class="bg-danger text-white">
            <h4> Made by Reem Ahmed <img src="https://img.icons8.com/material-rounded/24/000000/like--v1.png"/></h4>
        </div>
    </footer>
      
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
    `;
}
// export function to generate entire page
module.exports = generateTeamPage;