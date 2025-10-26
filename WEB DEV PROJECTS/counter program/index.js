dec = document.getElementById("decrease");
inc = document.getElementById("increase");
reset = document.getElementById("reset");
let count = 0;

dec.addEventListener("click", function () {
  count -= 1;
  document.getElementById("count").innerHTML = count;
});


inc.addEventListener("click", function () {
  count += 1;
  document.getElementById("count").innerHTML = count;
});


reset.addEventListener("click", function () {
  count = 0;
  document.getElementById("count").innerHTML = count;
});

