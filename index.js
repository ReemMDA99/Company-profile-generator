//require source generateHtml file
const generateHtml = require('./src/generateHtml.js');

//require node module packages
const inquirer = require('inquirer');
const fs = require('fs');

// Team profile
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



//create empty array for team
const teamMembers = [];

//Create prompts if 'Manager' is selected
const askManager = () => {
   
        return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter team Manager\'s name (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter Manager\'s name');
                    return false;
                }
            }   
        },
        {        
            type: 'input',
            name: 'employeeId',
            message:'Please enter team Manager\'s Employee Id (Required)',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                
                } else {
                    console.log('Please enter your employee Id');
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'emailId',
            message: 'Please enter team Manager\'s Email address (Required)',
            validate: emailId => {
                if (emailId) {
                    return true;
                } else {
                    console.log('Please enter Manager\'s email Id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter team Manager\'s office number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('please enter Manger\'s office number');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which option you would like to continue with:',
            choices: ['Engineer', 'Intern', 'No more Employees'],
            
        }
    ])
    .then((managerInput) => {
        const manager = new Manager(
        managerInput.name,
        managerInput.employeeId,
        managerInput.emailId,
        managerInput.officeNumber)
    
        teamMembers.push(manager);
        switch (managerInput.menu) {  

            case 'Engineer' : askEngineer();
            break;
        
            case 'Intern' : askIntern();
            break;

            default:
            writeToFile('./dist/index.html', generateHtml(teamMembers))
        
        }
        
    });
};

//Create prompts if 'Engineer' is selected

const askEngineer = () => {
    console.log(`
    ===============
    Add a New Engineer
    ===============
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'Please enter team Engineer\'s name (Required)',
            validate: engineerName => {
                if(engineerName) {
                    return true;
                } else {
                    console.log('Please enter Engineer\'s name');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'employeeId',
            message:'Please enter team Engineer\'s employee Id (Required)',
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log('Please enter engineer\'s employee ID');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'emailId',
            message:'Please enter team Engineer\'s Email Id (Required)',
            validate: emailId => {
                if (emailId) {
                    return true;
                } else {
                    console.log('Please enter Engineer\'s email Id');
                    return false;
                }       
            }
        },

         {
            type: 'input',
            name: 'githubUsername',
            message:'Please enter team Engineer\'s Github username (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter Engineer\'s Github Username');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which option you would like to continue with:',
            choices: ['Engineer', 'Intern', 'No more Employees'],
            
        }
    ])
    .then ((engineerInput) => {
        const engineer =  new Engineer(
            engineerInput.name,
            engineerInput.employeeId,
            engineerInput.emailId,
            engineerInput.githubUsername
        )
        teamMembers.push(engineer)

        switch(askEngineer.menu) {
            case 'Engineer':
                askEngineer();
            break;
            
            case 'Intern':
                askIntern();
            break;
            
            default: 
            writeToFile('./dist/index.html', generateHtml(teamMembers))
        }
    })
};
//Create prompts if 'Intern' is selected

const askIntern = () => {
    console.log(`
    ===============
    Add a New Intern
    ===============
    `);
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: 'Please enter team Intern\'s name (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter Intern\'s name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter team Intern\'s employeeId (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter team Intern\'s employeeId');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'emailId',
            message: 'Please enter team Intern\'s email Id (Required)',
            validate: emailId => {
                if (emailId) {
                    return true;
                } else {
                    console.log('Please enter team Intern\'s email Id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter team Intern\'s school name (Required)',
            validate: school => {
                if(school) {
                    return true;
                } else {
                    console.log('Please enter team Intern\'s school name');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'menu',
            message:'Please select which option you would like to continue with:',
            choices: ['Engineer', 'Intern', 'No more Employees'],
        
        }
    ])
    .then((internInput) => {
        const intern = new Intern(
            internInput.name,
            internInput.employeeId,
            internInput.emailId,
            internInput.school
        )
        teamMembers.push(intern)

        switch(internInput.menu) {
            case 'Engineer' : askEngineer();
            break;
            
            case 'Intern' : askIntern();
            break;
            default: writeToFile('./dist/index.html', generateHtml(teamMembers))
        }
    }) 
}
askManager();

// function to generate HTML page file using file system 

const writeToFile = (filename,data) => {
    fs.writeFile(filename, data, err =>{
        //if error return error
        if(err) {
            console.log(err);
            return;

        // if generate profile
        }else {
            console.log("Your team profile has been successfully created. Check out the index.html")
        }
    })
};

