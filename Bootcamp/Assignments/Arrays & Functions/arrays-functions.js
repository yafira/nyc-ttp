
// Assignment 2

var testArray1 = ["One", "Two", "Three", "Four", "Five"];
var testArray2 = [1, 2, 3, 4, 5];
var program;



// forEach()
// EXECUTES THE SAME ACTION TO EACH ITEM IN ARRAY
function myEach(testArray) {
  for(var i=0; i<testArray.length;i++){
    console.log(testArray[i] + " Mississippi");
  }
}



// map()
// RETURNS NEW ARRAY WITH ACTION DONE TO EACH ITEM IN ARRAY
function myMap(testArray) {
  var newArray = [];
  for(var i=0; i<testArray.length;i++){
    newArray.push(testArray[i] + " Mississippi");
  }
  return newArray;
}



// filter()
// ONLY ADDS ITEM TO NEW ARRAY IF IT FULFILLS REQUIREMENT
function myFilter(testArray) {
  var newArray = [];
  for(var i=0; i<testArray.length;i++){
    if(testArray[i].length<=3){
      newArray.push(testArray[i]);
    }
  }
  return newArray;
}



// some() (any)
// RETURNS TRUE IF SOME ITEM IN ARRAY FULFILLS REQUIREMENT
function mySome(testArray) {
  for(var i=0; i<testArray.length;i++){
    if(testArray[i].length<=3){
      return true;
    } else {
      return false;
    }
  }
}



// every()
// RETURNS TRUE IF EVERY ITEM IN AN ARRAY FULFILLS REQUIREMENT
function myEvery(testArray) {
  for(var i=0; i<testArray.length;i++){
    if(!(testArray[i].length <= 5)){
      return false;
    }
  }
  return true;
}



// reduce()
// PUTS EVERY ITEM IN ARRAY TOGETHER
function myReduce(testArray) {
  var total = 0;
  for(var i=0; i<testArray.length;i++){
    total += testArray[i];
  }
  return total;
}

// program = myEach(testArray1);
// program = myMap(testArray1);
// program = myFilter(testArray1);
// program = mySome(testArray1);
// program = myEvery(testArray1);
program = myReduce(testArray2);

console.log(program);
