//Import employee constructor
const Employee = require('../lib/Employee');
const employee = new Employee('Sulaiman', '10001', 'reem.mda0909@gmail.com');

//test if we can get constructor value for employee OBJECT 
test('test to create employee object', () => {
    expect(employee.name).toBe('Sulaiman');
    expect(employee.id).toBe('10001');
    expect(employee.email).toBe('reem.mda0909@gmail.com');
});

//create employee NAME using test and expect 
test('test to create employee NAME method', () => {
       expect(employee.getName()).toBe('Sulaiman') 
});

//create employee ID using test and expect 
test('test to create employee ID method', () => {
    expect(employee.getId()).toBe('10001');
});

//create employee EMAIL using test and expect 
test('test to create employee ID method', () => {
    expect(employee.getEmail()).toBe('reem.mda0909@gmail.com');
});

//create employee ID using test and expect 
test('test to create employee ROLE method', () => {
    expect(employee.getRole()).toBe('Employee');
});