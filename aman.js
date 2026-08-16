
const form = document.querySelector("#add-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const list = document.querySelector("#list");
const totalEl = document.querySelector("#total");



function addRow(name, price) {
  const li = document.createElement("li");

  li.innerHTML = `
    <span>${name} - ${price} ETB</span>
    <button class="delete">Delete</button>
  `;

  list.append(li);
}



function updateTotal() {
  let total = 0;

  list.querySelectorAll("li").forEach((li) => {
    const text = li.querySelector("span").textContent;
    const price = Number(text.split("-")[1].replace("ETB", "").trim());

    total += price;
  });

  totalEl.textContent = total;
}



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  
  if (!name || !price) {
    alert("Please enter item name and price.");
    return;
  }

  addcolme(name, price);

  form.reset();

  updateTotal();
});



list.addEventListener("click", (e) => {

  
  if (e.target.matches(".delete")) {
    e.target.closest("li").remove();
    updateTotal();
  }

  
  else if (e.target.closest("li")) {
    e.target.closest("li").classList.toggle("bought");
  }
});



const title = document.querySelector("h1");

title.textContent = "Welcome to Addis Market";

title.classList.toggle("active");



const cities = ["Addis Ababa", "Bahir Dar", "Adama"];

const ul = document.createElement("ul");

cities.forEach((city) => {
  const li = document.createElement("li");

  li.textContent = city;

  ul.append(li);
});

document.body.append(ul);