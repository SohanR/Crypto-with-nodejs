const {createHmac} = require('crypto');

const key = 'secrete';

const messages = 'hello there';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac);

const key2 = ' secrete2';
const hmac2 = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac2)