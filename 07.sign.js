const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./05.keyPairs');


const message = 'haha i got you';

const singer = createSign('rsa-sha256');

singer.update(message);

const signature = singer.sign(privateKey, 'hex');

const verify = createVerify('rsa-sha256');

verify.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');