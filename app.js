import { VAT, addVat } from "./money.js";

console.log("VAT:", VAT * 100 + "%");
console.log("Price with VAT:", addVat(500), "ETB");