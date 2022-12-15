const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;
p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    p1Display.innerText = p1Score;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("has-text-primary");
      p2Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
  }
});
p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    p2Display.innerText = p2Score;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("has-text-primary");
      p1Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
  }
});
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});
resetButton.addEventListener("click", reset); // se here i am not actually executing the reset function, but im just calling it or you can say that im just passing the reference to the reset function over here.
function reset() {
  isGameOver = false;
  p1Display.innerText = "0";
  p2Display.innerText = "0";
  p1Score = 0;
  p2Score = 0;
  p1Display.classList.remove("has-text-primary", "has-text-danger");
  p2Display.classList.remove("has-text-danger", "has-text-primary");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
