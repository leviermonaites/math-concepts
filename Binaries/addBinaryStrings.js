/*
 * Algorithm to make sum of binary numbers.
 * Picked up from the book Mathematics and Physics for Progammers by John P. Flynt and Danny Kodiced
 */

const addBinaryStrings = (b1, b2) => {
  const padOutSmallestNumber = (smallestN, highestN) => {
    let updatedValue = smallestN;
    for (let i = smallestN.length; i < highestN.length; i++) {
      updatedValue = `0${smallestN}`;
    }
    return updatedValue;
  };

  if (b1.length < b2.length) b1 = padOutSmallestNumber(b1, b2);
  else b2 = padOutSmallestNumber(b2, b1);

  let output = '';
  let carryDigit = 0;

  for (let i = b1.length - 1; i > -1; i--) {
    let [k1, k2] = [b1[i], b2[i]];
    let writeDigit = 0;
    if (k1 === k2) {
      writeDigit = carryDigit;
      carryDigit = k1;
    } else {
      writeDigit = carryDigit == '1' ? '0' : '1';
    }
    output = `${writeDigit}${output}`;
  }
  if (carryDigit == '1') output = `1${output}`;
  return output;
};

console.log(addBinaryStrings('101', '0101'));

export default addBinaryStrings;
