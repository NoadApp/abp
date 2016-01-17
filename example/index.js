const abp = require('../');
const co = require('co');

abp('./easylistchina.txt', function(error, rules){
  console.log(rules.length);
});

co(function * (){
  const rules = yield abp('./easylistchina.txt');
  console.log(rules.length);
});
