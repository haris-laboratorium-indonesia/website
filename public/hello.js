class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(opration) {}

  compute() {}

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}
const numberButton = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-opeation]");
const equalsbutton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
