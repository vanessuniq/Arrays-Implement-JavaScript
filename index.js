class DynamicArray {
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
    const poppedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return poppedItem;
  }

  insert(index, item) {
    this.length++;

    for (let i = this.length - 1; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[index] = item;

    return this.data;
  }

  remove(index) {
    const itemToBeRemoved = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return itemToBeRemoved;
  }
}

const array = new DynamicArray();
array.push('hello');
array.push('world');
array.push('check');
array.push('out');
array.push('my');
array.push('array');
array.push('!!!');
array.push(':)');

console.log(array[0]);
console.log(array[1]);
console.log(array[array.length - 1]);
console.log(array);

array.pop();
array.pop();

console.log(array);

array.insert(2, '!');
array.insert(6, 'custom');

console.log(array);

array.remove(1);
array.insert(1, 'friends');
