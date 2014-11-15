var BST = require('./binaryTree');

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);


var max = nums.getMax();
console.log(max);
