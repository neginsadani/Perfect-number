const perfectNumbers = [];

function isPerfectNumber(num) {
  if (num <= 0) return;

  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  if (sum === num) {
    perfectNumbers.push(num);
  }
}

isPerfectNumber(23);
isPerfectNumber(6);
isPerfectNumber(24);
isPerfectNumber(61);
isPerfectNumber(28);

console.log(`${perfectNumbers} are perfect numbers`);
