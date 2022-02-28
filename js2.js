var price = 425_000_000;
var prePaid = (price * 30) / 100;
var n = 8 * 12;
var monthlyPayment = 2_967_500;

var debt = price - prePaid;
var r = 51.895 / 100 / 12;

console.log(debt);
for (var i = 1; i <= 6; i++) {
  debt -= monthlyPayment - debt * r;
}
console.log(debt);
