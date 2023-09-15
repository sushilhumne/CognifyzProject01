var now = new Date()
var currentHour = now.getHours();
var greetingMessage;

if (currentHour < 12) {
  greetingMessage = "Welcome to the web-page have a Good morning";
} else if (currentHour < 18) {
  greetingMessage = "Welcome to the web-page have a Good afternoon";
} else {
  greetingMessage = "Welcome to the web-page have a Good evening!";
}
alert(greetingMessage);

function calculate() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var result = num1 + num2;
alert('The result is: ' + result);
}


const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  button.style.backgroundColor = 'blue';
  button.style.border = '2px solid blue';
  button.style.color = 'white';
  button.style.padding = '10px';
  button.style.fontSize = '16px';
});


