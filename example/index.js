const abp = require('../');

abp('./easylistchina.txt', function(rules){
  console.log(rules);
});
