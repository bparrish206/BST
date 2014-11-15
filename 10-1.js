var BST = require('./binaryTree');

BST.prototype.count = function(){
  console.log("There are " + this.count + " nodes in the BST!");
};

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log(nums.tcount);
