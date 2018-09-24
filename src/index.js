class Sorter {
  constructor() {
    this.sorter = [];
  }

  add(element) {
    this.sorter.push(element);
  }

  at(index) {
    return this.sorter[index];
  }

  get length() {
    return this.sorter.length;
  }

  toArray() {
    return this.sorter;
  }

  sort(indices) {

    for (let i = 0; i < indices.length - 1; i++) {
      for (let j = 0; j < indices.length - i; j++) { 
        let a = this.sorter[indices[j]];
        let b = this.sorter[indices[j + 1]];
        if (a > b) {
          let swap = a;
          a = b;
          b = swap;
        }
      }
    }
  }
  
  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;