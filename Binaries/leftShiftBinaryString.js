/*
 * This code yields the same functionality as the << (left-shift) operator
 */

const leftShiftBinaryString = (string, n) => {
  // By convention, just to make sure that it's going to be a string
  // even when the user pass an integer
  string.toString();

  // The same thing of the first commentary.
  Number(n);

  for (let i = n; i > 0; i--) {
    string = `${string}0`;
  }

  return string;
};

console.log(leftShiftBinaryString('110', 1));
