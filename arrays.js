const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage

strings[2];

// push
strings.push("e"); // O(1)

// pop
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)

// console.log(strings);

// C++
// int a[20]
// int b[5] {1,2,3,4,5}

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.pop();
  }
}

const na = new MyArray();
na.push("hi");
na.push("you");
na.push("!");
na.delete(0);
na.push("are");
na.push("nice");
na.delete(1);
na.pop();
console.log(na);
console.log(na.get(na.length - 1));

// Reverse a string means you have to convert it to an array

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Hmm that's not good";
  }
  const backwards = [];
  const lastIndex = str.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards.join(""));

  return backwards.join("");
}

function reverse2(str) {
  console.log(str.split("").reverse().join(""));
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse3("Hi Im Samuel"));

// Merge sorted arrays

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];

  // Check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
