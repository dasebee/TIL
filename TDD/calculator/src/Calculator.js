function Calculator() {
  this.result = 0;
}

Calculator.prototype.add = function (num1, num2) {
  this.result = num1 + num2;
}

Calculator.prototype.subtract = function (num1, num2) {
  this.result = num1 - num2;
}

Calculator.prototype.multiply = function (num1, num2) {
  this.result = num1 * num2;
}

Calculator.prototype.division = function (num1, num2) {
  this.result = num1 / num2;
}
Calculator.prototype.reset = function() {
  this.result = 0;
}