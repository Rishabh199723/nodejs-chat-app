// var date=new Date();      //moment library used
// console.log(date.getMonth());  //no longer used

var moment=require('moment');
// var date=moment();
// console.log(date.format('MMM Do, YYYY'));

//10:35 am
//6:01 am
var sometimestamp=moment().valueOf();
console.log(sometimestamp);
var createdAt=1234;
var date=moment(createdAt);
console.log(date.format('h:mm a'));
