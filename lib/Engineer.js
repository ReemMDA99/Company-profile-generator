//Import employee
const Employee = require('./Employee');

//Extend employee constructor to manager
class Engineer extends Employee {
    constructor (name, id, email, githubUsername) {
        // call parent constructor
        super(name, id ,email);
        this.githubUsername = githubUsername;
    }

//get Github
    getGitHub () {
    return this.githubUsername;
    }
//extend employee role to engineer
getRole() {
    return "Engineer";
    }
}
//export Engineer
module.exports = Engineer;