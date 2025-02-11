// TODO: add checks for each function to assert that we are operating on numbers

/**
 * @param {number} lv
 * @param {number} rv
 * @returns {number}
 */
function add(lv, rv) {
  return lv + rv;
}

/**
 * @param {number} lv
 * @param {number} rv
 * @returns {number}
 */
function substract(lv, rv) {
  return lv - rv;
}

/**
 * @param {number} lv
 * @param {number} rv
 * @returns {number}
 */
function multiply(lv, rv) {
  return lv * rv;
}

/**
 * @param {number} lv
 * @param {number} rv
 * @return {number|null}
 */
function divide(lv, rv) {
  if (rv === 0) {
    return null;
  }

  return lv / rv;
}

let currentValue = "";
let previousValue = "";
let operator = "";

/**
 * @param {number} lv
 * @param {number} rv
 * @param {string} op
 * @returns {number}
 */
function operate(lv, rv, op) {
  lv = Number.parseFloat(lv);
  rv = Number.parseFloat(rv);
  switch (op) {
    case "+":
      return add(lv, rv);
    case "-":
      return substract(lv, rv);
    case "*":
      return multiply(lv, rv);
    case "/":
      return divide(lv, rv);
    default:
      return rv;
  }
}

const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
  button.addEventListener("click", function() {
    const value = this.dataset.value
    display.value = value
  })
})
