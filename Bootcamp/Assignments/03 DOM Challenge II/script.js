
// Starts off with one box inside the container
var container = document.querySelector(".container");
var columns = 1;
var rows = 1;

var boxes;

// Adds columns
document.querySelector("#addcolumn").addEventListener("click", function(){
  if (columns<10){
    columns++;
    fillBoxes();
  }
});
// Removes columns
document.querySelector("#removecolumn").addEventListener("click", function(){
  if (columns>0){
    columns--;
    fillBoxes();
  }
});
// Adds rows
document.querySelector("#addrow").addEventListener("click", function(){
  if (rows<10){
    rows++;
    fillBoxes();
  }
});
// Removes rows
document.querySelector("#removerow").addEventListener("click", function(){
  if (rows>0){
    rows--;
    fillBoxes();
  }
});

// Resets colors when filled
document.querySelector("#resetcolors").addEventListener("click", fillBoxes);








// Fills boxes with colums and rows
function fillBoxes(){
  console.log("Columns: " + columns);
  console.log("Rows: " + rows);

  container.style.width = (50*columns)+"px";
  container.innerHTML = "";

// Columns * Rows = max amount of boxes inside container using width
  for(var i=0; i < columns*rows ; i++){
    createBox();
  }

// Fill cells with the color selected
  var color = document.querySelector("#color");
  boxes = document.querySelectorAll(".box");
  boxes.forEach( function(item){
    item.addEventListener("click", function(){
      console.log("clicked box.");
      this.classList.add(color.value);
    });
  });
}

// Creates box using divs
function createBox(){
  var div = document.createElement('div');
  div.setAttribute('class', 'box');
  container.appendChild(div);
}
