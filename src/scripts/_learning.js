var a = 'Hello world';
console.log(a);
console.log(a + '!');
//alert(a + '!');

// Camel case
var myFavoriteNumber;
console.log(myFavoriteNumber);
myFavoriteNumber = 5;
console.log(myFavoriteNumber);

// partial case
console.log(MyFavoriteNumber);
var MyFavoriteNumber;
console.log(MyFavoriteNumber);
//ERROR console.log(FavoriteNumber); not defined

// underscore
var my_favorite_number;
console.log(my_favorite_number);

// Array
var colors = ['red', 'blue', 'green'];
console.log(colors);
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[0]);

//

var colors2 = new Array('red', 'yellow', 'orange');
console.log(colors2);
console.log(colors2[3]);
colors2[3] = 'green';
console.log(colors2);
// Method push
colors2.push('purple');
console.log(colors2);
console.log(colors2[2]);
console.log(colors2[1]);
console.log(colors2[0]);
console.log(colors2[3]);
console.log(colors2[4]);

// array numbers and operations

var numbers = [5,77,6,43,45];
//console.log(numbers[0] + numbers[2]);
//property lenght
//console.log(numbers.length);

//Method
console.log(numbers.sort());
