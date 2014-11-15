var node = {
value: 125,
left: null,
right: null,
};

function BST(){
  this._root = null;
}

BST.prototype = {
  constructor: BST,

  add: function(value){
    var node = {
      value: value,
      left: null,
      right: null,
    };

    if (this._root === null){
      this._root = node;
    } else {
      current = this._root;
      while(true){
        if (value < current.value){
          if (current.left === null){
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else if (value > current.value){
          if (current.right === null){
              current.right = node;
              break;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
  },

  contains: function(value){
    var found = false,
    current = this._root;
    while(!found && current){
      if(value < current.value){
        current = current.left;
      } else if (value > current.value){
        current = current.right;
      } else {
        found = true;
      }
    }
  },

  remove: function(value){
  },
  traverse: function(process){
    function inOrder(node){
      if (node){
        if (node.left !== null){
          inOrder(node.left);
        }
        process.call(this, node);

        if (node.right !== null){
          inOrder(node.right);
        }
      }
    }
    inOrder(this._root);
  },

  size: function(){
    var length = 0;
    this.traverse(function(node){
      length++;
    });
    return length;
  },

  toArray: function(){
    var result = [];
    this.traverse(function(node){
      result.push(node.value);
    });
  },

  toString: function(){
    return this.toArray().toString();
  },
};


var nums = new BST();
nums.add(23);
nums.add(45);
nums.add(16);
nums.add(16);
nums.add(37);
nums.add(3);
nums.add(99);
nums.add(22);

console.log(nums.traverse(nums));
