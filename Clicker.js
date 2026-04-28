const button = document.getElementById("theButton");
const display = document.getElementById("display");
const upgrade = document.getElementById("upgrade");
const upgrade2 = document.getElementById("upgrade2");
const moneyPerSecond = document.getElementById("moneyPerSecond");
const tickPassed = new CustomEvent("broadcast1");

let tickRate = 1000;

const ticks = setInterval(() => {
  document.dispatchEvent(tickPassed);
}, tickRate);

let count = 0;
let clickPower = 1;
let tickPower = 0;
let clickUpgradeCost1 = 50;
let tickUpgradeCost1 = 200;

button.addEventListener("click", () => {
  count += clickPower;
  updateUI();
});

function updateUI() {
  display.innerText = "$" + count;
  moneyPerSecond.innerText = "$" + tickPower + "/s";
  button.innerText = "+$" + clickPower;
  upgrade.innerText =
    "Upgrade Click Power (Cost: $" + Math.floor(clickUpgradeCost1) + ")";
  upgrade2.innerText =
    "Upgrade Tick Power (Cost: $" + Math.floor(tickUpgradeCost1) + ")";
}

upgrade.addEventListener("click", () => {
  if (count >= clickUpgradeCost1) {
    count -= clickUpgradeCost1;
    clickPower += 1;
    clickUpgradeCost1 *= 1.5;
    updateUI();
  }
});

document.addEventListener("broadcast1", () => {
  count += tickPower;
  updateUI();
});

upgrade2.addEventListener("click", () => {
  if (count >= tickUpgradeCost1) {
    count -= tickUpgradeCost1;
    tickPower += 1;
    tickUpgradeCost1 *= 1.5;
    updateUI();
  }
});
