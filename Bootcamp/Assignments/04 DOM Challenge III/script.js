
async function getCurrency(code) {
  let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${code}`);
  let data = await response.json()
  return data;
}


var convertButton = document.querySelector('.convertButton');
var baseAmount = document.querySelector('.baseAmount');
var convertAmount = document.querySelector('.convertAmount');



convertButton.addEventListener("click", function(){
  var base = document.querySelector(".baseCurrency");
  var baseCurrency = base.options[base.selectedIndex].value;
  console.log(baseCurrency);

  var convert = document.querySelector(".convertCurrency");
  var convertCurrency = convert.options[convert.selectedIndex].value;
  console.log(convertCurrency);

  getCurrency(baseCurrency)
    .then(data => {
      // console.log(data);
      console.log(baseAmount.value);
      var convertRate = data.rates[convertCurrency];
      var totalAmount = baseAmount.value * convertRate;
      convertAmount.innerHTML = totalAmount.toFixed(2)
    });
});
