const {scryptSync, randomBytes, timingSafeEqual} = require('crypto');

const singUp = (email,password) =>{
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password , salt ,64).toString('hex');

    const user = { 
        email,
        password:`${salt}:${hashedPassword}`
    }

    users.push(user);

    return user;
}

const logIn = (email,password) =>{
    const user = users.find( v => v.email === email);

    const [salt,key] = user.password.split(':');
    const hashBuffer = scryptSync(password, salt, 64);

    const keyBuffer = buffer.from(key,'hex');
    const match = timingSafeEqual(hashBuffer,keyBuffer);

    if (match){
        return 'Login Success!!'
    }else{
        return 'Login Fail !'
    }
}