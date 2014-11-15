var Tree = require('./binaryTree');

Tree.prototype.Node = function(data, left, right){
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right = right;
  this.show = show;
};

Tree.prototype.update = function(data){
  var grade = this.find(data);
  grade.count++;
  return grade;
};

  function prArray(arr){
  console.log(arr[0].toString() + ' ');
  for (var i = 1; i < arr.lenght; ++i){
    console.log(arr[i].toString() + ' ');
    if (i % 10 == 0){
      console.log("\n");
    }
  }
}

  function genArray(length){
  var arr = [];
  for (var i = 0; i < length; ++i){
    arr[i] = Math.floor(Math.random() * 101);
  }
  return arr;
}

var grades = genArray(100);
prArray(grades);
var gradedistro = new Tree();
for (var i =0; i <grade.lenght; i++){
  var g = grades[i];
  var grade = gradedistro.find(g);
  if (grade === null){
    gradedistro.insert(g);
  }
  else {
    gradedistro.update(g);
  }
}

var count = "y";

while (count == "y"){
  console.log("\n\nEnter a grade: ");
  var g = parseInt(readline());
  var aGrade = gradedistro.find(g);
  if(aGrade === null) {
    console.log("No occurences of " + g);
  }
  else {
    console.log("Occurrences of " + g + ": " + aGrade.count);
  }
  console.log("Look at another grade (y/n)? ");
  count = readline();
}
