var BST = require('./binaryTree');
var fs = require('fs');
var treeOfknwldg = new BST();

fs.readFile('./text.txt', 'utf-8', function(err, data){
  if(err) throw err;
  var words = data.split(' ');
  for (var i =0; i <words.length; i++){
    var word = words[i];
    var aword = treeOfknwldg.find(word);
      if(!aword){
        treeOfknwldg.insert(word);
      }
      else {
        treeOfknwldg.update(word);
      }
    }
});

//treeOfknwldg.insert(4);
//console.log(words);
console.log(treeOfknwldg.count);
var test = treeOfknwldg.find('code');
