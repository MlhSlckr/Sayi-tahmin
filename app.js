const guess = document.querySelector(".number");
const text = document.querySelector(".text");
const numbers = document.querySelector(".numbers");
const popupText = document.querySelector(".popup-text");
const popup = document.querySelector(".popup");
const off = document.querySelector(".off");

let x = Math.floor(Math.random() * 100) + 1;
let y = 0;

guess.addEventListener("keyup", (e) => {
  e.preventDefault();

  if (e.keyCode === 13) {
    if (guess.value === "") {
      guess.style.border = "1px solid tomato";
      setTimeout(() => {
        guess.style.border = "";
      }, 1500);
    } else {
      guessNumber();
    }
  }
});

function guessNumber() {
  diff = Math.abs(x - guess.value);
  if (diff === 0) {
    popup.style.display = "flex";
    popupText.textContent = `Tebrikler, ${y} denemede bildiniz`;
  } else if (diff < 5) text.textContent = "Alev alev";
  else if (diff <= 10) text.textContent = "Sıcak";
  else if (diff <= 20) text.textContent = "Ilık";
  else if (diff <= 30) text.textContent = "Soğuk";
  else if (diff <= 40) text.textContent = "Çok Soğuk";
  else if (diff <= 50) text.textContent = "Buzzz gibi";
  numbers.innerHTML += `
  <span class="item">${guess.value}, </span>
  `;
  guess.value = "";
  y++;
}

off.addEventListener("click", () => {
  popup.style.display = "none";
  numbers.innerHTML = "";
  let x = Math.floor(Math.random() * 100) + 1;
  y = "0";
  text.textContent = "0 ile 100 arasında sayı tahmin ediniz";
});
