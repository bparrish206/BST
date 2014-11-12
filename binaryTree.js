function Node(data, left, right){
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show(){
  return this.data;
}

function BST(){
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

function insert(data){
  var n = new Node(data, null, null);
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
}

function inOrder(node){
  if(!(node === null)){
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

function preOrder(node){
  if (!(node === null)){
    console.log(node.show() + " ");
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder(node){
  if (!(node === null)) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + " ");
  }
}

inOrder(nums.root);

preOrder(nums.root);

postOrder(nums.root);


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

var min = nums.getMin();

var max = nums.getMax();

BST.prototype.find = function(data){
  var current = this.root;
  while(current.data != data){
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
  return current;
};

BST.prototype.remove = function(data){
  root = removeNode(this.root, data);
};

BST.prototype.removeNode = function(node, data){
  if (node=== null){
    return null;
  }

  if (data == node.data){
    if(node.left == null && node.right == null){
      return null;
    }
    if (node.left = null){
      return node.right;
    }

    if(node.right = null){
      return node.left;
  }
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);

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
