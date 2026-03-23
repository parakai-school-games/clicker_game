const button = document.getElementById("theButton");
const display = document.getElementById("display");
const upgrade = document.getElementById("upgrade");
const upgrade2 = document.getElementById("upgrade2");
const tickPassed = new CustomEvent("broadcast1");
let tickRate = 1000;
const ticks = setInterval(() => {
  document.dispatchEvent(tickPassed);
}, tickRate);
let count = 0;
let clickPower = 1;
let tickPower = 0;

button.addEventListener("click", () => {
  count += clickPower;
  display.innerText = "$" + count;
});

upgrade.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    clickPower += 1;
    display.innerText = "$" + count;
    button.innerText = "+$" + clickPower;
  }
});
document.addEventListener("broadcast1", () => {
  count += tickPower;
  display.innerText = "$" + count;
});

upgrade2.addEventListener("click", () => {
  if (count >= 200) {
    count -= 200;
    tickPower += 1;
    display.innerText = "$" + count;
  }
});
