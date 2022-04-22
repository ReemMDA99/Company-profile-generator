//import intern
const Intern = require('../lib/Intern');
const intern = new Intern('KK', 10003, 'reem.mda0909@gmail.com', 'UofT');

//test to get constructor value for engineer object
test('test constructor for engineer object', () => {
    expect(intern.school).toEqual(expect.any(String));
});

//get school
test ('test to get school', () => {
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
//get role
test('test to get the role', () => {
    expect(intern.getRole()).toBe('Intern');
});