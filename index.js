var price = 21_990_000;
var prePaid = 6_597_000;
var n = 6;
var monthlyPayment = 2_967_500;

var price = 20_000_000;
var prePaid = (price * 30) / 100;
var n = 6;
var monthlyPayment = 2_543_333;

var debt = price - prePaid;
var r = 30.2 / 100 / 12;

console.log(debt);
for (var i = 1; i <= n; i++) {
  debt -= monthlyPayment - debt * r;
}
console.log(debt);
