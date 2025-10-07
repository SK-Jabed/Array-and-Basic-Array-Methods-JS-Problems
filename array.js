// --- Level 1 ---

// Question: 01
let colors = ["Red", "Blue", "Green", "Yellow", "Black"];
console.log(colors.length);


// Question: 02
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.toString());


// Question: 03
let letters = ["A", "B", "C", "D"];
console.log(letters[2]);


// Question: 04
let words = ["Learning", "JavaScript", "is", "fun"];
console.log(words.join(" "));


// Question: 05
let items = ["pen", "pencil", "eraser", "sharpener"];
items.pop();
console.log(items);


// Question: 06
items.push("marker");
console.log(items);


// Question: 07
let cities1 = ["Dhaka", "Chittagong", "Khulna"];
cities1.shift();
console.log(cities1);


// Question: 08
let cities2 = ["Chittagong", "Khulna"];
cities2.unshift("Rajshahi");
console.log(cities2);


// --- Level 2 ---

// Question: 09
let arr1 = ["A", "B", "C"];
let arr2 = ["D", "E"];

let combined = arr1.concat(arr2);
console.log(combined);


// Question: 10
let numbers = [10, 20, 30, 40, 50, 60];
let slicedPart = numbers.slice(1, 4);
console.log(slicedPart);


// Question: 11
let arr = [10, 20, 30, 40];
delete arr[1];
console.log(arr);


// --- Level 3 ---

// Question: 12
let copyArray = [1, 2, 3, 4, 5];
copyArray.copyWithin(3, 0, 2);

console.log(copyArray);


// Question: 13
let nestedArray = [1, [2, 3], [4, [5]]];
let flattenedArray = nestedArray.flat(2);

console.log(flattenedArray);


// Question: 14
let numArr = [10, 20, 30, 40, 50];
numArr.splice(2, 2, 99, 100);

console.log(numArr);


// Question: 15
let a = [1, 2, 3, 4, 5];
let b = a.slice(1, 4);
let c = a.splice(1, 4);

console.log(a, b, c);


// Question: 16
let fruitsArr = ["apple", "banana", "cherry"];
let newFruits = fruitsArr.toSpliced(1, 1);

console.log("Fruits:", fruitsArr);
console.log("New Fruits:", newFruits);


// Question: 17
let jsArr = ["JS", "love", "I"];
let reversed = [];

while (jsArr.length > 0) {
    reversed.push(jsArr.pop());
}

console.log(reversed);


// Question: 18
let nestedArr = ["a", "b", ["c", "d"]];
console.log(nestedArr[2][0]);