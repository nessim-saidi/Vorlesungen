window.addEventListener("load", () => {
  let calcBtn = document.querySelector("#calcBtn");
  let operand1In = document.querySelector("#operand1");
  let operand2In = document.querySelector("#operand2");
  let operatorIn = document.querySelector("#operator");
  let resultDiv = document.querySelector("#result");

  // let calc = new calculator();
  let calc = new calculatorClass();

  calcBtn.addEventListener("click", () => {
    let result = calc.calculate(operand1In.value, operatorIn.value, operand2In.value);
    resultDiv.innerHTML = result;
  });
});


/**
 * calculator - implemented as constructor function
 *
 * @return {type}  description
 */
function calculator() {
  this.calculate = function(op1, operator, op2) {

    switch (operator) {
      case "+":
        return this.add(op1, op2);
        break;
      case "-":
        return this.sub(op1, op2);
        break;
      case "*":
        return this.multiply(op1, op2);
        break;
      case "/":
        return this.divide(op1, op2);
        break;

      default:
    }
  },

  this.add = function(op1, op2) {
    return Number(op1) + Number(op2);
  },

  this.sub = function(op1, op2) {
    return Number(op1) - Number(op2);
  },

  this.multiply = function(op1, op2) {
    return Number(op1) * Number(op2);
  },

  this.divide = function(op1, op2) {
    if (op2 != 0) {
      return Number(op1) / Number(op2);
    }
  }
}


/**
 * calculatorClass - implemented as JS6 class
 */
class calculatorClass {
  calculate (op1, operator, op2) {
    switch (operator) {
      case "+":
        return this.add(op1, op2);
        break;
      case "-":
        return this.sub(op1, op2);
        break;
      case "*":
        return this.multiply(op1, op2);
        break;
      case "/":
        return this.divide(op1, op2);
        break;

      default:
    }
  }

  add (op1, op2) {
    return Number(op1) + Number(op2);
  }

  sub (op1, op2) {
    return Number(op1) - Number(op2);
  }
  multiply (op1, op2) {
    return Number(op1) * Number(op2);
  }
  divide (op1, op2) {
    if (op2 != 0) {
      return Number(op1) / Number(op2);
    }
  }
}
