const customer = {
  name: "Ali",
  city: "Adama",
  country: "Ethiopia",
  "PHONE Number": "251706627565"
};

const { name, city, country, "PHONE Number": phone } = customer;

function greet({ name }) {
  return `How are you, ${name}?`;
}

console.log(name, city, country, phone);
console.log(greet(customer));