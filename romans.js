
// We did some stuff for you! This is basic logic for affecting the DOM.
// It short circuits the page's HTML form and fires off a handbuilt JS function.
window.onload = function() {
  var form = document.querySelector('.input-form')
  form.addEventListener('submit',printConvertedValue,false)
}

// This is the function that actually adds the output to the DOM. Don't change
// this!
var printConvertedValue = function(event) {
  event.preventDefault()
  var number = this.number.value
  var outputDiv = document.querySelector('.output')
  outputDiv.innerText = numeralConverter(number)
}


var numeralConverter = function romanNumbers (number) {

	
	var romanDictionary = [
		{num: 1000, roman: 'M'},
	    {num: 900, roman: 'CM'},
	    {num: 500, roman: 'D'},
	    {num: 400, roman: 'CD'},
	    {num: 100, roman: 'C'},
	    {num: 90, roman: 'XC'},
	    {num: 50, roman: 'L'},
	    {num: 40, roman: 'XL'},
	    {num: 10, roman: 'X'},
	    {num: 9, roman: 'IX'},
	    {num: 5, roman: 'V'},
	    {num: 4, roman: 'IV'},
	    {num: 1, roman: 'I'}
	];

    for (var i = 0; i < romanDictionary.length; i++) {
        if (number < 1 )
            return "";       
		else if (number >= romanDictionary[i].num) {
            return romanDictionary[i].roman + romanNumbers(number - romanDictionary[i].num); 

        }
    }
}
