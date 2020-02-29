function plus() {
  var num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);

  result = num1 + num2;
  document.getElementById("out").value = result;
}

function minus() {
  var num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);

  result = num1 - num2;
  document.getElementById("out").value = result;
}

function multi() {
  var num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);

  result = num1 * num2;
  document.getElementById("out").value = result;
}

function delenie() {
  var num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);

  result = num1 / num2;
  document.getElementById("out").value = result;
}

function stepen() {
  var num1, num2, result;
  num1 = document.getElementById("n1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("n2").value;
  num2 = parseInt(num2);

  result = num1 ^ num2;
  document.getElementById("out").value = result;
}
