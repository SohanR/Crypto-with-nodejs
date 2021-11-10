const { publicEncrypt, publicDecrypt, privateDecrypt } = require('crypto');

const { privateKey, publicKey } = require('./05.keyPairs');


const messages = 'I am Batman!';

const encryptedData = publicEncrypt(
    publicKey, 
    buffer.from(message)
);

console.log(encryptedData.toString('hex'));


const decryptedData = privateDecrypt(
    publicKey,
    encryptedData
);

console.log(decryptedData.toString('utf-8'));