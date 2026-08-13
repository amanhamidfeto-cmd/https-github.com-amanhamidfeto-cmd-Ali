const prices = [100, 500, 900, 1200];

const total = prices
  .map(p => p * 1.15)
  .filter(p => p < 1000)
  .reduce((sum, p) => sum + p, 0);

console.log(total);