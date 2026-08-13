const customer = {
  name: "Ali",
  city: "Adama",
  balance: 2000
};

for (const [key, value] of Object.entries(customer)) {
  console.log(key, value);
}