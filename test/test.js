var chai = require('chai');
var expect = require('chai').expect;
var BST = require('../binaryTree');

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
var min = nums.getMin();

describe('Max number', function(){
  it('should find max value in tree', function(){
    expect(max).to.eql(99);
  });

  it('shoulge find min value in tree', function(){
    expect(min).to.eql(3);
  });
});
