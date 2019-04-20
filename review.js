// var user = {
//     sayHi: function() {
//         console.log("Hello");
//     }
// }
// user.sayHi()

// var user = {
//     sayHi() {
//         console.log("Hello");
//     }
// }
// user.sayHi()

// yang bawah shorthand hasilnya

// var user = {
//     name: "Jhon",
//     hi() {
//         console.log(user.name);
//     }
// }

// var hi = user.hi;
// hi()

// console.log(hi)

var user = {
    name: "Jhon",
    age: 30
}

var clone = {};

for (var i in user){
    clone[i] = user[i];
}

clone.name = "Pete";

console.log(user.name)