// Question: 01
let colors = ["red", "blue", "green", "yellow", "black"];
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
let cities = ["Dhaka", "Chittagong", "Khulna"];
cities.shift();
console.log(cities);

// Question: 08
cities.unshift("Rajshahi");
console.log(cities);

// Question: 09
let arr1 = ["A", "B", "C"];
let arr2 = ["D", "E"];
let combined = arr1.concat(arr2);
console.log(combined);

// Question: 10
let numbers = [10, 20, 30, 40, 50, 60];
let sliced = numbers.slice(1, 4);
console.log(sliced);

// Question: 11
let arr = [10, 20, 30, 40];
delete arr[1];
console.log(arr);

// Question: 12
let nums = [1, 2, 3, 4, 5];
nums.copyWithin(3, 0, 2);
console.log(nums);

// Question: 13
let nested = [1, [2, 3], [4, [5]]];
let flattened = nested.flat(2);
console.log(flattened);

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
console.log(fruitsArr);
console.log(newFruits);

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