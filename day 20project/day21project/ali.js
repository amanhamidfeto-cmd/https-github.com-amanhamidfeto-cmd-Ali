const form = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const error = document.querySelector("#error");
const count = document.querySelector("#count");

const PHONE = /^(?:\+251|0)9\d{8}$/;

function save(people) {
  localStorage.setItem("people", JSON.stringify(people));
}

function load() {
  try {
    const data = localStorage.getItem("people");

    if (!data) return [];

    const people = JSON.parse(data);

    return Array.isArray(people) ? people : [];
  } catch {
    return [];
  }
}


function validate(name, phone) {
  if (name.length < 2) {
    return "Enter your full name.";
  }

  if (!PHONE.test(phone)) {
    return "Enter a valid Ethiopian phone number.";
  }

  return "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  const message = validate(name, phone);

  if (message) {
    error.textContent = message;
    return;
  }

  const people = load();

  people.push({
    name: name,
    phone: phone
  });

  save(people);

  error.textContent = "";
  form.reset();

  count.textContent = `${people.length} people have signed up.`;
});


const people = load();
count.textContent = `${people.length} people have signed up.`;