import Element from './Element.js';

export const union = (set1, set2) => {
  const set = new Set();
  for (let i of set1) {
    set.add(i);
  }
  for (let i of set2) {
    if (!set.has(i)) set.add(i);
  }
  return set;
};

export const intersection = (set1, set2) => {
  const newSet = new Set();
  for (let i of set1) {
    if (set2.has(i)) newSet.add(i);
  }
  return newSet;
};

export const difference = (set1, set2) => {
  const set = new Set();
  for (let i of set1) {
    if (!set2.has(i)) set.add(i);
  }
  return set;
};

export const symmetricDifference = (set1, set2) =>
  union(difference(set1, set2), difference(set2, set1));

export const complements = (parent, set1, set2 = {}) => {
  const newSet = new Set();
  for (let i of parent) {
    if (i !== set1 && i !== set2) {
      newSet.add(i);
    }
  }
  return newSet;
};

const A = new Set();
A.add(5);
A.add(8);

const B = new Set();
B.add(8);

const C = new Set();
C.add(B);

console.log(symmetricDifference(A, B));
