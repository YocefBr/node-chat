const moment = require('moment');




var createdAt = 123;
var date = moment(createdAt);

console.log(date.format('h:mm a'));