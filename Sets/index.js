class Set {
    constructor() {
        this.elements = [];
    }

    contains(element) {
        return this.elements.includes(element);
    }

    addElement(element) {
        this.elements.push(element);
        return `${element.data} added successfully!`;
    }
}

class Element {
    constructor(data, parent) {
        if(!parent) {
            throw new Error("Element must have a parent");
        }
        
        this.data = data;
        this.attachToSet(parent);
    }
    
    attachToSet(set) {
        return set.addElement(this);
    }
    
    // The name is just an allusion to the symbol contains, that is ∈.
    // Since it's only about my studies in maths, there's no big problem!
    E(set) {
        return set.contains(this);
    }
}

const A = new Set();
const element1 = new Element(5, A);

const B = new Set();

B.elements.push('dd');
console.log(B);