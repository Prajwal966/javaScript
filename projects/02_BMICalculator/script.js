const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.6) {
    result.innerHTML = `<span>${bmi} Under Weight</span>`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    result.innerHTML = `<span>${bmi} Normal Range</span>`;
  } else {
    result.innerHTML = `<span>${bmi} Overweight</span>`;
  }
});
