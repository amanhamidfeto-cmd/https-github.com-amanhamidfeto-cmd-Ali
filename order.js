// order.js

// 1. Add all prices
export const subtotal = (...prices) =>
  prices.reduce((total, price) => total + price, 0);

// 2. Discount factory
export const discountBy = (rate) => (amount) =>
  amount * (1 - rate);

// 3. Add VAT
export const withVat = (rate) => (amount) =>
  amount * (1 + rate);

// 4. Convert to ETB
export const toETB = (amount) =>
  `${amount.toFixed(2)} ETB`;

// 5. Receipt maker with private order number
export const makeReceiptMaker = () => {
  let orderNumber = 0;

  return (amount) => {
    orderNumber++;

    return `#${orderNumber}: ${toETB(amount)}`;
  };
};