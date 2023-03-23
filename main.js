let view = document.getElementsByClassName("views");
let cost = document.getElementsByClassName("amount");
let slider = document.getElementsByClassName("range");
let toggle = document.getElementsByClassName("slider");
let pageViews = ["10K", "S0K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

slider.addEventListener("input", function () {
  updateValue();
});

toggle.addEventListener("change", function () {
  if (isYearly === false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
});

function updateValue() {
  if (isYearly) {
    cost.innerHTML = perMonth[slider.value] * 0.75;
  } else {
    cost.innerHTML = perMonth[slider.value];
  }
}
