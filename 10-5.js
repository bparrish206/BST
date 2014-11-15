var BST = require('./binaryTree');
var fs = require('fs');
var treeOfknwldg = new BST();
var lit = '';

fs.readFile('./text.txt', 'utf-8', function(err, data){
  if(err) throw err;
  lit +=data.toLowerCase();
  var words = lit.split(' ');
  for (var i =0; i <words.length; i++){
    if(treeOfknwldg.find(words[i])){
      treeOfknwldg.update(treeOfknwldg.find(words[i]));
    } else{treeOfknwldg.insert(words[i]);}
    }
  });

console.log(treeOfknwldg);
var test = treeOfknwldg.find('code');
console.log(test);
