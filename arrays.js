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

console.log(strings);

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
}

// Reverse a string means you have to convert it to an array
