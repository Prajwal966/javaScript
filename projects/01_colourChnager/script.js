const buttons = document.querySelectorAll(".button");
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      document.querySelector("body").style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      document.querySelector("body").style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      document.querySelector("body").style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      document.querySelector("body").style.backgroundColor = e.target.id;
    }
  });
});
