const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btn = document.getElementById("button");
const color = document.getElementById("color");
const square = document.getElementById("square")

let swap = false;

btn.addEventListener("click", () => {
  if (swap) {
    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
  } else {
    const temp2 = input2.value;
    input2.value = input1.value;
    input1.value = temp2;   
  }
  swap = !swap;
});



color.addEventListener('input', () => {
  const color = color.value;
  square.style.backgroundColor = color;
});

color.addEventListener('change', (event) => {
  const color = event.target.value;
  square.style.backgroundColor = color;
});
