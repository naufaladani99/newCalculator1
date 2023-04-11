const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    updateScreen(event.target.value);
  });
});

const calculatorLayar = document.querySelector(".calculator-layar");

const updateScreen = (number) => {
  calculatorLayar.value = number;
};

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;

    case "-":
      result = prevNumber - currentNumber;
      break;

    case "*":
      result = prevNumber * currentNumber;
      break;

    case "/":
      result = prevNumber / currentNumber;
      break;

    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearBtn = document.querySelector(".bersihkan");

// clearBtn.addEventListener("click", () => {
//   console.log("berhasil");
// });

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const persent = document.querySelector(".persen");

persent.addEventListener("click", (event) => {
  inputPersent(event.target.value);
  updateScreen(currentNumber);
});

inputPersent = (number) => {
  number / 100;
};

function myFunction() {
  var element = document.querySelector(".badan");
  element.classList.toggle("dark-mode");
}

alert("Hello! Wellcome to my Smart Calculator");
