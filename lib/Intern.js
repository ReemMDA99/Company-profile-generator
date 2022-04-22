//import employee
const Employee = require('./Employee');

//extend employee constructor on intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
// get school
    getSchool() {
        return this.school;
    }
//impose employee role
    getRole() {
        return "Intern";
    }
}
// export intern
module.exports = Intern;