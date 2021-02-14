// && || !


// A && B

// true && true = true
// true && false = false
// false && true = false
// false && false = false


// A || B

// true || true = true
// true || false = true
// false || true = true
// false || false = false

var a = 10;
var b = 20;
var c = 30;
var d = 40;

if(a > b && c > d){
    console.log("A greater than B & C greater than D");
}
else if(a > b || c < d){
    console.log("B greater than A & D greater than C");
};
var check = !(a > b);
console.log(check);