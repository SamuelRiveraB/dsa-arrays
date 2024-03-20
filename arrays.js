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
