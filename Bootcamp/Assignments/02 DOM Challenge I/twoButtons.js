

var started = false;
var b1 = document.getElementById("btn1");
b1.addEventListener("click", function() {
  changeText(b1);
});
var b2 = document.getElementById("btn2");
b2.addEventListener("click", function() {
  changeText(b2);
});

function changeText(button){
  console.log("entered");
  if(!started){
    button.value = "I'm right"
    started = true
  } else {
    button.value = "No, I'm right!"
  }
}
