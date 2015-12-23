'use strict'

let yaml = require('js-yaml');
let fs = require('fs');

function readFile(filename){
  var contents = fs.readFileSync(filename, 'utf8');
  return contents;
}

function getFilesInDir(path){
	var files = fs.readdirSync(path);
	return files;
}

let filename  =  __dirname + '/sample.md';
let content = readFile(filename);

let index = content.indexOf('---');
let config = content.substring(0,index);
let body = content.substring(index+3);

try {
  
  console.log('content',content);
  console.log('config',config);

  var doc = yaml.load(config);
  console.log('doc',doc);
  console.log(typeof doc);
  console.log('body',body);

  doc.content = body;

  console.log('all', doc)
} catch (e) {
  console.log(e);
}

let files = getFilesInDir(__dirname + '/layout');
console.log(files);

var layoutObj = {};

for(let file of files){
	let content = readFile(__dirname+'/layout/'+file);
	layoutObj[file] = content;
}

console.log( layoutObj);