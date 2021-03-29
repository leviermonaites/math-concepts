import { complements, intersection, union } from '../Sets/index.js';

const u = new Set();

const a = new Set();
a.add(5);
a.add(4);
a.add(2);
a.add(0);

const b = new Set();
b.add(2);
b.add(5);

const c = new Set();
c.add(40);
c.add(3);
c.add(2);

const d = new Set();
d.add(34);
d.add(3);
d.add(7);

const e = new Set();
e.add(6);
e.add(2);
e.add(0);

u.add(a);
u.add(b);
u.add(c);
u.add(d);
u.add(e);

// The complements of the union is equal to the intersection of the complements.
console.log('FIRST LAW');
console.log(complements(u, a, b));
console.log('');
console.log(intersection(complements(u, a), complements(u, b)));
console.log('-------------------------------------------------');

// The complements of the intersection is equal to the union of the complements.
console.log('SECOND LAW');
console.log(complements(u, intersection(a, b)));
console.log('');
console.log(union(complements(u, a), complements(u, b)));
