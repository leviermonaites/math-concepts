export class Element {
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

export default Element;
