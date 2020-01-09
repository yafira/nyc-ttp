
var r = document.getElementById("radius");

document.getElementById("submit").addEventListener("click", function() {
  var answer = (4 / 3) * Math.PI * r.value * r.value * r.value ;
  alert("The volume of your sphere is "+ answer.toFixed(2));
});
