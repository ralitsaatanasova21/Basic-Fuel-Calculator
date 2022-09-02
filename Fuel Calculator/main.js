let first = document.querySelector("#first");
let second = document.querySelector("#second");
let button = document.querySelector("#submitBTN");
let result = document.querySelector(".result");

button.addEventListener("click", (e) => {
  e.preventDefault();

  result.textContent = "";

  let isTrue = true;
  if (isNaN(first.value) || isNaN(second.value)) {
    isTrue = false;
  }

  if (first.value === "" || second.value == "" || !isTrue) {
    return;
  }

  let res = (second.value / first.value) * 100;

  let p = document.createElement("p");
  let strong = document.createElement("strong");
  p.textContent = "Разход за 100км: ";
  strong.textContent = `${res.toFixed(2)}л`;

  p.appendChild(strong);
  result.appendChild(p);

  first.value = "";
  second.value = "";
});
