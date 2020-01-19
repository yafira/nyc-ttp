
var pass = document.getElementById("password");

document.getElementById("submit").addEventListener("click", function() {
  if (pass.value == "12345678"){
    document.getElementById("final").innerHTML= "Password is Correct!"
  } else {
    document.getElementById("final").innerHTML= ""
    alert("I'm sorry the password was incorrect!");
  }
});
