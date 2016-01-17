# abp

This repository began as a GitHub fork of [adblockplus/abp2blocklist](https://github.com/adblockplus/abp2blocklist).


```javascript
const abp = require('abp');

abp('./easylistchina.txt', function(rules){
  console.log(rules);
});

```
