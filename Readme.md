# Some of most popular crypto concept i try to implement using my favorite weapon NodeJS.

# Table of content

- [Hash](#hash)
- [Salt](#salt)

<section id='hash'/>

## Hash

### What is Hash ?

Word it self has a meaning like **Chop and Mix**!

#### Describing

You start with an input, which can be any length. Then pass it throw a **Hashing Function** (eg: md5,sh,argon2). <br> This function returns **Fixed Length** value. And its looks like meaningless garbage.
<br>

The important thing here is that the function will always produce the **Same output** given the **Same Input**.

        SAME INPUT => SAME OUTPUT

It's need to be fast to compute and unique, however its extremely difficult for a computer to Reverse Engineer what the original massage actually was.

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
