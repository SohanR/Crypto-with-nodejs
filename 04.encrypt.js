const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

const Message = 'i like someone';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key , iv);


// Encrypt
const encrytedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');


// Decrypt

const decipher = createDecipheriv('aes256', key, iv);
const decrytedMessage = decipher.update(encrytedMessage, 'hex', 'utf8') + decipher.final('utf8');