let currentInput = "";

function inputDigit(digit) {
  if (digit === "C") {
    currentInput = "";
  } else {
    currentInput += digit;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").innerText = currentInput;
}

function performCalculation() {
  fetch("http://localhost:3000/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ expression: currentInput }),
  })
    .then((response) => response.json())
    .then((data) => {
      currentInput = data.result.toString();
      updateDisplay();
    })
    .catch((error) => console.error("Error:", error));
}
