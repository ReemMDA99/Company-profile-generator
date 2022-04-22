const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Dan', '10002', 'reem.mda0909@gmail.com', 'ReemMDA99');

// creating engineer object 
test('test to get constructor value for engineer object', () => {
    expect(engineer.githubUsername) .toEqual(expect.any(String)); 
});


// get githubUsername
test('get engineers github username', () => {
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.githubUsername.toString()));})

// gets role 
test('gets role of worker', () => {
    expect(engineer.getRole()).toEqual('Engineer');
});