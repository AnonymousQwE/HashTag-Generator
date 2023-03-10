const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
let hashTag = "";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  hashTag = "#";
  HashtagGenerator(input.value);
  input.value = "";
});

function HashtagGenerator(str) {
  str.split(" ").forEach((e) => {
    let string = e.split("");
    hashTag += string.shift().toUpperCase() + string.join("");
  });
  output.innerHTML += `<br>${hashTag}<br>`;
}
