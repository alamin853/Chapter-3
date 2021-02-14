var name = '';

// if (name.length == 0) {
//     fullName = "Alamin Bhuiyan";
// }
// else{
//     fullName = name; 
// }
// console.log(fullName);

var fullName = name || "Alamin Bhuiyan";
console.log(fullName)

var isOk = true;

// if (isOk) {
//     console.log("Everything is Ok");
// }

isOk && console.log("Everything is Ok");