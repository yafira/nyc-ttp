
// Starts off with one box inside the container
var container = document.querySelector(".container");
var columns = 1;
var rows = 1;

var boxes;
var color = document.querySelector("#color");

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

// Fills all cells with selected color
document.querySelector("#fillall").addEventListener("click", function(){
  boxes = document.querySelectorAll(".box");
  boxes.forEach( function(item){
    item.classList.remove("magenta");
    item.classList.remove("lightslategrey");
    item.classList.remove("greenyellow");
    item.classList.remove("blue");

    item.classList.add(color.value);
  });
});

// Resets colors when filled
document.querySelector("#resetcolors").addEventListener("click", fillBoxes);








// Maximizes/minimizes the count of boxes for columns and rows
function fillBoxes(){
  console.log("Columns: " + columns);
  console.log("Rows: " + rows);

  container.style.width = (50*columns)+"px";
  container.innerHTML = "";

  // Columns * Rows = max amount of boxes inside container using width
  for(var i=0; i < columns*rows ; i++){
    createBox();
  }

  // Add event listener for color
  // Fill clicked box with the selected color
  boxes = document.querySelectorAll(".box");
  boxes.forEach( function(item){
    item.addEventListener("click", function(){
      console.log("clicked box.");
        this.classList.remove("magenta");
        this.classList.remove("lightslategrey");
        this.classList.remove("greenyellow");
        this.classList.remove("blue");

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
