let sum = " ";
function buildSum(char) {
  sum += char;
  document.getElementById("outputs").innerHTML += char;
}
function calculate() {
  sum = eval(sum);
  document.getElementById("outputs").innerHTML = sum;
}
function reset(clear) {
  console.log(" ");
  document.getElementById("outputs").innerHTML = " ";
  sum = " ";
}
function red() {
  document.getElementById("outputs").style.color = "red";
}
function green() {
  document.getElementById("outputs").style.color = "green";
}
function blue() {
  document.getElementById("outputs").style.color = "blue";
}