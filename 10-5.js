var BST = require('./binaryTree');
var fs = require('fs');
var treeOfknwldg = new BST();

fs.readFile('./text.txt', function(err, data){
  if(err) throw err;
  console.log(data);
  //for (var i =0; i <data.length; i++){
    //var word = data[i];
    //console.log(word);
    //if (word) {
      //treeOfknwldg.insert(word);
    //}
//  }

  //orderdT = treeOfknwldg.preOrder();
//console.log(orderdT);


});
