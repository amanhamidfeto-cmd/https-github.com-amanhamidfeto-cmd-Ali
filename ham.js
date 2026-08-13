

import {
  subtotal,
  discountBy,
  withVat,
  makeReceiptMaker
} from "./order.js";

const memberDiscount = discountBy(0.10);
const vat = withVat(0.15);

const makeReceipt = makeReceiptMaker();

const order1 = subtotal(120, 80, 50);
const total1 = vat(memberDiscount(order1));

console.log(makeReceipt(total1));

const order2 = subtotal(200, 100);
const total2 = vat(memberDiscount(order2));

console.log(makeReceipt(total2));