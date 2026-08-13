import { transactions } from "./tran.js";
import { totalByType } from "./report.js";

console.log("Debits:", totalByType(transactions, "debit"), "ETB");
console.log("Credits:", totalByType(transactions, "credit"), "ETB");