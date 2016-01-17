# abp

This repository began as a GitHub fork of [adblockplus/abp2blocklist](https://github.com/adblockplus/abp2blocklist).


```javascript
const abp = require('abp');

abp('./easylistchina.txt', function(error, rules){
  console.log(rules.length);
});

co(function * (){
  const rules = yield abp('./easylistchina.txt');
  console.log(rules.length);
});

```
