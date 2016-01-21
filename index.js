var readline = require("line-reader");
var thenify = require('thenify').withCallback;
var parser = require('adios-engine');

var abp = function(file, callback){
	var lines = [];
	readline.eachLine(file, function(line, last) {
		lines.push(line);
		if(last){
			callback(null, parser.parseRules(lines));
		}
	})
}

module.exports = thenify(abp);
