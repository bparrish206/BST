var Node = function(data, left, right){
  this.data = data;
  this.left = left;
  this.right = right;
  this.count = 1;
};

Node.prototype.show =function(){
  return this.data;
};

function BST(){
  this.root = null;
  this.count = 0;
}

BST.prototype.insert = function(data){
  var n = new Node(data, null, null);
  this.count++;
  if(this.root === null){
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while(true){
      parent = current;
      if (data <current.data){
        current = current.left;
        if (current === null){
          parent.left = n;
          break;
        }
      }
      else {
        current = current.right;
        if (current === null){
          parent.right = n;
          break;
        }
      }
    }
  }
};

BST.prototype.inOrder = function(node){
  if(!(node == null)){
    this.inOrder(node.left);
    console.log(node.show() + " ");
    this.inOrder(node.right);
  }
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

BST.prototype.preOrder = function(node){
  if (!(node == null)){
    console.log(node.show() + ' ');
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
};

BST.prototype.postOrder = function(node){
  if (!(node == null)) {
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.show() + " ");
  }
};

BST.prototype.getMin = function(){
  var current = this.root;
  while(!(current.left == null)){
    current = current.left;
  }
  return current.data;
};

BST.prototype.getMax = function(){
  var current = this.root;
  while(!(current.right === null)){
    current = current.right;
  }
  return current.data;
};

BST.prototype.find = function(data){
  var current = this.root;
  while (current && current.data != data){
    if (data < current.data){
      current = current.left;
    }
    else {
      current = current.right;
    }
    if (current === null){
      return null;
    }
  }
  return current; //&& current.count;
};

BST.prototype.remove = function(data){
  this.root = this.removeNode(this.root, data);
};

BST.prototype.update = function(data){
  var word = this.find(data);
  word.count++;
  return word;
};

BST.prototype.removeNode = function(node, data){
  var tempNode = getSmallest(node.right);
  node.data = tempNode.data;
  node.right = removeNode(node.right, tempNode.data);

  if (node=== null){
    return null;
  }

  if (data == node.data){
    if(node.left === null && node.right === null){
      return null;
    }
    if (node.left === null){
      return node.right;
    }

    if(node.right === null){
      return node.left;
  }

  else if (data < node.data){
    node.left = removeNode(node.left, data);
    return node;
  }
  else {
    node.right = removeNode(node.right, data);
    return node;
  }
  }
};

module.exports = BST;
