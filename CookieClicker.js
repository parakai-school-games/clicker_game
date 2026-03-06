const button = document.getElementById("theButton");
const display = document.getElementById("display");
const upgrade = document.getElementById("upgrade");
let count = 0;
let clickPower = 1;

button.addEventListener("click", () => {
  count += clickPower;
  display.innerText = "$" + count;
});

upgrade.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    clickPower += 1;
    display.innerText = "$" + count;
  }
});

