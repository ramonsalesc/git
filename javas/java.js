console.log("Olá, Mundo");
function nineteen(number) {
  var x = 0;
  for (var i = 1; i <= number; i++) {
    x += i;
  }
  return x;
}
console.log(nineteen(5));

var a = { id: 2 };
var b = a;

a.id = 4;
console.log(b);

function teste(a, b, c) {
  return (a + b + c) / 3 >= 7.0;
}
console.log(teste(10, 5, 6));

function teste2(numero) {
  if ((numero / 2 + 1) % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

console.log(teste2(16));

var a = 10;
var b = a;
a = 15;

console.log(b);
