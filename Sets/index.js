class Element {
  constructor(data, parent) {
    if (!parent) {
      throw new Error('Element must have a parent');
    }

    this.data = data;
    this.attachToSet(parent);
  }

  attachToSet(set) {
    return set.add(this);
  }

  // The name is just an allusion to the "is part of" symbol, that is ∈.
  // Since it's only about my studies in maths, there's no big problem!
  E(set) {
    return set.has(this);
  }
}

const union = (set1, set2, element) => set1.has(element) || set2.has(element);
const intersection = (set1, set2) =>
  set1.filter((element) => set2.has(element));
const difference = (set1, set2) =>
  [...set1].filter((value, index) => !set2.has(value));

const symmetricDifference = (set1, set2) => [
  ...difference(set1, set2),
  ...difference(set2, set1),
];

const A = new Set();
A.add(5);
A.add(8);

const B = new Set();
B.add(8);

const element = new Element(3, A);
element.attachToSet(B);

console.log(symmetricDifference(A, B));
