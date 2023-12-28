var a = 5;
var num = "";
for (var i = 1; i <= a; i++) {
  for (var j = 1; j <= i; j++) {
    num += j;
  }
  num += "\n";
}
console.log(num);
// reverse print
var b = 4;
var num1 = "";
for (var k = 1; k <= b; k++) {
  for (l = 1; l <= b - k + 1; l++) {
    num1 += l;
  }
  num1 += "\n";
}
console.log(num1);

var obj = {
  id: 1234,
  name: "Rajesh",
  salary: "12k",
  disgnation: "Engineer",
};
console.log(obj);
//prime numbers
console.log("Prime Numbers 1 to 100");
var x = 2;
while (x <= 100) {
  var y = 2;
  while (y <= x) {
    if (x == y) {
      console.log(x);
    }
    if (x % y == 0) {
      break;
    }
    y++;
  }
  x++;
}

var a = 0;
var b = 1;
var c;
while (a < 40) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
}
