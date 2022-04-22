//Import Employee(parent) constructor
const Employee = require('./Employee');

//Extend employee constructor to manager
    class Manager extends Employee {
        
        constructor(name,id, email, officeNumber) {
        // call parent constructor
            super (name, id, email);
        //Add officeNumber to Manager 
            this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Assign role to manager 
    getRole() {
        return "Manager";
    }
}
//Export manager
module.exports = Manager;