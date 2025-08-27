colorSelector = document.getElementById("colorSelector");
colorSquare = document.getElementById("colorSquare");

colorSelector.addEventListener("change", function () {
  let color = colorSelector.value;
  colorSelector.style.backgroundColor = color;
  console.log(color);
});
