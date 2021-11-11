# Some of most popular crypto concept i try to implement using my favorite weapon NodeJS.

# Table of content

- [Hash](#hash)
- [Salt](#salt)
- [HMAC](#hmac)
- [Encrypt](#encrypt)
- [KeyPairs](#keypairs)

<section id='hash'/>

## Hash

### What is Hash ?

Word it self has a meaning like **Chop and Mix**!

#### Describing

You start with an input, which can be any length. Then pass it throw a **Hashing Function** (eg: md5,sh,argon2). <br> This function returns **Fixed Length** value. And its looks like meaningless garbage.
<br>

The important thing here is that the function will always produce the **Same output** given the **Same Input**.

        SAME INPUT => SAME OUTPUT

It's need to be fast to compute and unique, however its extremely difficult for a computer to Reverse Engineer what the original message actually was.

Real example of Hash is, storing password on a database.

[Click here](https://github.com/SohanR/Crypto-with-nodejs/blob/master/01.hash.js) to see the implementation of **Hash**.

<br>
<br>

<section id='salt' />

## Salt

A salt is just a random value that added to the password(any string) before it **hash**.

<br>

Therefore making it more harder to guess.

<br>

In nodeJS we can hash a password with salt by importing **scryptSync** and **randomeBytes** function.

See the full implementation [here](https://github.com/SohanR/Crypto-with-nodejs/blob/master/02.salt.js)

<br>
<br>

<section id='hmac' />

## HMAC: HASH-BASED MESSAGE AUTHENTICATION CODE

HMAC is HASH that also required a password. So the only person can create the same hash signature, must also have the corresponding password or key.

<br>

An example is Json web token for authentication on web.

<br>

In nodeJS we can import the createHmac function then we will define a secret key along with the message that we want to hash.

<br>

We can create hash like we do in [Hash](https://github.com/SohanR/Crypto-with-nodejs/blob/master/01.hash.js), the only different is we also provide this key.
The important things to notice here is that we got the same hash if the same password used, but if we use different password we got entirely different hash.

<br>

See the full [implementation](https://github.com/SohanR/Crypto-with-nodejs/blob/master/03.hmac.js)

<br>
<br>

<section id="encrypt" />

## Encrypt

[HMAC](#hmac) is cool, but what happens when you want to share a secret with someone and also allow them to read the original message.

<br>

That's where the **Encryption** comes in.

### What is Encryption exactly ?

In Encryption we take a message, scramble of the bytes to make it unreadable. That's called the **Cipher Text**.

<br>

Then provide a key or password, allowing somebody else to decrypted it.

<br>

It's also typically randomized. So that each time you encrypt, you get an entirely different encrypted output **Even if the key and message are the same**.

<br>

To implement in NodeJS we are going to import **createCipheriv** (iv stands for Initialization Vector), along with **randomBytes** and **createDecipher**.

        const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

Look at the full implementation [here](https://github.com/SohanR/Crypto-with-nodejs/blob/master/04.encrypt.js)

<br>
<br>

<section id='keypairs' />

**KeyPairs** is **Public-key CryptoSystem**.

<br>

Instead of one key, it uses two keys that mathematically linked. A private key and a Public key.

<br>

Private key should always be keep secrete and the public key can be share with other people.

<br>

In node we can generate public and private key pairs using the **generateKeypairSync** function.

See the full implementation [here](https://github.com/SohanR/Crypto-with-nodejs/blob/master/05.keyPairs.js)
