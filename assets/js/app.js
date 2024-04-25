// ---- DOM ---- //
const keyboardEl = document.querySelector(".keyboard");
let display = document.querySelector(".display-input");

const keys = [ "CE", "x!", "(", ")", "%", "AC", "sin", "π", 7, 8, 9, "÷", "cos", "log", 4, 5, 6, "×", "tan", "√", 1, 2, 3, "-", "e", "x^2", 0, ".", "=", "+",];

const operators = ["=", "*", "+", "/", "-", "x^2", "%", "√", "x!", "sin", "cos", "tan", "log"];

let output = "";

// ---- keys assign ----//
for (let i = 0; i < keys.length; i++) {
  const key = document.createElement("button");
  key.innerHTML = keys[i];
  key.innerHTML === "CE" ? (key.id = "ce") : null;
  key.innerHTML === "AC" ? (key.id = "ac") : null;
  key.innerHTML === "=" ? (key.id = "equal") : null;
  keyboardEl.append(key);
}

keyboardEl.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") calculate(e.target.innerHTML);
});

const calculate = (keyValue) => {
  const radiansValue = output * 0.0174533;
  if (keyValue === "×") {
    keyValue = "*";
  }

  if (keyValue === "÷") {
    keyValue = "/";
  }

  try {
    if (keyValue === "=" && output) {
      output = eval(output.replace("%", "/100"));
    } else if (keyValue === "AC") {
      output = "";
    } else if (keyValue === "CE") {
      output = output.slice(0, -1);
    } else if (keyValue == "π") {
      const pi = Math.PI;
      output = pi;
    } else if (keyValue == "e") {
      output = Math.E;
    } else if (keyValue == "sin" && output) {
      output = Math.sin(radiansValue);
    } else if (keyValue === "cos" && output) {
      output = Math.cos(radiansValue);
    } else if (keyValue === "tan" && output) {
      output = Math.tan(radiansValue);
    } else if (keyValue === "log" && output) {
      output = Math.log(output) / Math.log(10);
    } else if (keyValue === "√" && output) {
      output = Math.sqrt(output, 2);
    } else if (keyValue === "x^2" && output) {
      output = Math.pow(output, 2);
    } else if (keyValue === "x!" && output) {
      fact(output);
    } else {
      if (output === "" && operators.includes(keyValue)) return;
      output += keyValue;
    }
  } catch (error) {
    alert("invalid");
    output = "";
  }

  display.value = output;
};

// ---- factorial function ---- //
const fact = (data) => {
  if (isNaN(data)) {
    alert("invalid");
  } else {
    let result = 1;
    for (let i = 1; i <= data; i++) {
      result = result * i;
    }
    output = result;
  }
};
