const guess = document.querySelector(".number");
const text = document.querySelector(".text");
let x = Math.floor(Math.random() * 100) + 1;

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
  console.log("x:", x);
  console.log("tahmin:", guess.value);
  diff = Math.abs(x - guess.value);
  console.log(diff);
  if (diff === 0) {
    text.textContent = "Tebrikler Doğru Bildiniz";
  } else if (diff < 5) text.textContent = "Alev alev";
  else if (diff <= 10) text.textContent = "Sıcak";
  else if (diff <= 20) text.textContent = "Ilık";
  else if (diff <= 30) text.textContent = "Soğuk";
  else if (diff <= 40) text.textContent = "Çok Soğuk";
  else if (diff <= 50) text.textContent = "Buzzz gibi";
}
