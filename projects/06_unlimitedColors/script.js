let intervalId;
const randomColor = function () {
  const hex = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

document.getElementById("start").addEventListener("click", function (e) {
  if (!intervalId) {
    intervalId = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

document.getElementById("stop").addEventListener("click", function (e) {
  clearInterval(intervalId);
  intervalId = null; // this is just for an cleaner code
});
