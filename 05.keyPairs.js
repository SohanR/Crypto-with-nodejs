const { generateKeyPairSync } = require('crypto');


const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength:2048,
    publicKeyEncoding:{
        type:'spki',
        format:'pem'
    }
});

console.log(privateKey)
console.log(publicKey)

module.exports = {
    privateKey, publicKey
}