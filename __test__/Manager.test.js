//Import manager
const Manager = require('../lib/Manager');
const manager = new Manager('Reem', 1000, 'reem.mda0909@gmail.com', 9999999);
// create Manager object

//test manager object
test('test to get constructor value for Manager object', () => {
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

//get role
test('get employee Role', () => {
     expect(manager.getRole()).toBe("Manager");
});