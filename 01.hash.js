// importing hash from node build in crypto

const { createHash } = require('crypto');   


// creating a string hash

const hash = (input) => createHash('sha256').update(input).digest('hex'); 


// compare two hashed passwords

let password = 'sohan';

