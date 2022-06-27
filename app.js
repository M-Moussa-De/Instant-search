import { data } from "./products.js";

const input = document.querySelector("#search-product");
const ul = document.querySelector("#list");
const span = document.querySelector("span");

input.addEventListener("input", () => {
  const val = input.value;

  if (val) {
    render(val);
  } else {
    ul.style.display = "none";
    span.style.display = "block";
  }
});

const render = (word = "") => {
  ul.innerHTML = "";
  span.style.display = "block";

  word = cleanupWord(word);

  const filtered = filterData(word);

  if (filtered.length > 0) {
    span.style.display = "none";
    filtered.forEach((item) => {
      ul.insertAdjacentHTML("beforeend", `<li>${item.name}</li>`);

      ul.style.display = "block";
    });
    return;
  }
  span.style.display = "block";
};

const cleanupWord = (word) => {
  return word.trim().toLowerCase();
};

const filterData = (word) =>
  data.filter((item) => item.name.includes(word) || item.des.includes(word));
