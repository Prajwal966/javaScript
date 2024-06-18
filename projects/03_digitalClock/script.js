const clock = document.getElementById("clock");
// set interval is used to refresh page at every millisecond
setInterval(function () {
  let date = new Date();
  //toLocalTimeString is predefined property in date object
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// 1000 = 1 sec
