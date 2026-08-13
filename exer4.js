const customer = {
  name: "Ali",
  city: "Adama",
  balance: 2000
};

const updated = {
  ...customer,
  sex: "male",
  department: "IT",
  city: "Bishoftu"
};

console.log(customer);
console.log(updated);