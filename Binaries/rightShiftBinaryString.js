/*
 * This code yields the same functionality as the >> (right-shift) operator
 */

const rightShiftBinaryString = (string, n) => {
  // By convention, just to make sure that it's going to be a string
  // even when the user pass an integer
  string.toString();

  // The same thing of the first commentary.
  Number(n);

  for (let i = n; i > 0; i--) {
    string = `0${string.slice(0, string.length - 1)}`;
  }

  return string;
};

console.log(rightShiftBinaryString('100000', 1));
