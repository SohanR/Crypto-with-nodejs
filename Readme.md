# Some of most popular crypto concept i try to implement using my favorite weapon NodeJS.

# Table of content

- [Hash](#hash)

<section id='hash'/>

## Hash

### What is Hash ?

Word it self has a meaning like **Chop and Mix**!

#### Describing

You start with an input, which can be any length. Then pass is fo throw a **Hashing Function** (eg: md5,sh,argon2). <br> This function returns **Fixed Length** value. And its looks like meaningless garbage.
<br>

The important thing here is that the function will always produce the **Same output** given the **Same Input**.

        SAME INPUT => SAME OUTPUT

It's need to be fast to compute and unique, however its extremely difficult for a computer to Reverse Engineer what the original massage actually was.

Real example of Hash is, storing password on a database.

[Click here]() to see the implementation of **Hash**.
