// --- Task 0 & 1 ---
console.log("Name: Adilzhan, Group: SE-2433");
alert("Hello, JavaScript World");

let name = "Adilzhan";
let age = 19;
let isStudent = true;

console.log("Sum:", 5 + 3);
console.log("Concatenation:", "Name: " + name + ", Age: " + age);

// --- Task 2 ---
function changeText() {
  document.getElementById("paragraph").textContent = "hello world";
}

// --- Task 3 ---
function changeColor() {
  document.getElementById("styleBox").style.backgroundColor = "#7b7b7bff";
}
function changeFont() {
  document.getElementById("styleBox").style.fontSize = "22px";
}

// --- Task 4 ---
function addItem() {
  const list = document.getElementById("itemList");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  newItem.className = "list-group-item";
  list.appendChild(newItem);
}
function removeItem() {
  const list = document.getElementById("itemList");
  if (list.lastChild) list.removeChild(list.lastChild);
}

// --- Task 5 ---
const box = document.getElementById("colorBox");
box.addEventListener("mouseover", () => (box.style.background = "#ffb703"));
box.addEventListener("mouseout", () => (box.style.background = "lightgray"));

// --- Task 6 ---
const input = document.getElementById("liveInput");
const output = document.getElementById("liveOutput");
input.addEventListener("keyup", () => {
  output.textContent = input.value ? "You typed: " + input.value : "";
});

// --- Task 7 ---
function calculate(op) {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const resultElement = document.getElementById("calcResult");

  if (isNaN(n1) || isNaN(n2)) {
    resultElement.textContent = "Enter valid numbers!";
    return;
  }

  let result;
  switch (op) {
    case "+": result = n1 + n2; break;
    case "-": result = n1 - n2; break;
    case "*": result = n1 * n2; break;
    case "/": result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero"; break;
  }
  resultElement.textContent = `Result: ${result}`;
}

