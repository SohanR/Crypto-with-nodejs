// importing hash from node build in crypto

const { createHash } = require('crypto');   


// creating a string hash

const hash = (input) => createHash('sha256').update(input).digest('hex'); 


// compare two hashed passwords

let password = 'sohan';

const hash1 = hash(password)

console.log(hash1);

password = 'sohanr'

const hash2 = hash(password)

console.log(hash2);

const match = hash1 === hash2;

console.log(match ? 'good password' : 'password does not match');
