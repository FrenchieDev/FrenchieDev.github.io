function greet() {
  alert(
    "Welcome to my first JS calculator(alpha). Suggestions? Tweet me: @DevFrenchie. THANKS, Woof-Woof :D"
  );
  start();
}

function start(e) {
  // Number's variables
  let result = document.getElementById("result");
  const one = document.getElementById("n1");
  const two = document.getElementById("n2");
  const three = document.getElementById("n3");
  const four = document.getElementById("n4");
  const five = document.getElementById("n5");
  const six = document.getElementById("n6");
  const seven = document.getElementById("n7");
  const eight = document.getElementById("n8");
  const nine = document.getElementById("n9");
  const zero = document.getElementById("n0");
  // Operation's variables
  const addition = document.getElementById("addition");
  const substraction = document.getElementById("substraction");
  const multiplication = document.getElementById("multiplication");
  const division = document.getElementById("division");
  const percentage = document.getElementById("percentage");
  const dot = document.getElementById("dot");
  const leftBracket = document.getElementById("leftBracket");
  const rightBracket = document.getElementById("rightBracket");
  // Results & others
  const equal = document.getElementById("equal");
  const reset = document.getElementById("reset");
  const erase = document.getElementById("erase");

  // Number's click events
  one.onclick = function (e) {
    result.textContent = result.textContent + "1";
    e.target.blur();
  };

  two.onclick = function (e) {
    result.textContent = result.textContent + "2";
    e.target.blur();
  };

  three.onclick = function (e) {
    result.textContent = result.textContent + "3";
    e.target.blur();
  };

  four.onclick = function (e) {
    result.textContent = result.textContent + "4";
    e.target.blur();
  };

  five.onclick = function (e) {
    result.textContent = result.textContent + "5";
    e.target.blur();
  };

  six.onclick = function (e) {
    result.textContent = result.textContent + "6";
    e.target.blur();
  };

  seven.onclick = function (e) {
    result.textContent = result.textContent + "7";
    e.target.blur();
  };

  eight.onclick = function (e) {
    result.textContent = result.textContent + "8";
    e.target.blur();
  };

  nine.onclick = function (e) {
    result.textContent = result.textContent + "9";
    e.target.blur();
  };

  zero.onclick = function (e) {
    result.textContent = result.textContent + "0";
    e.target.blur();
  };

  // Operation's click events
  addition.onclick = function (e) {
    result.textContent = result.textContent + "+";
    e.target.blur();
  };

  substraction.onclick = function (e) {
    result.textContent = result.textContent + "-";
    e.target.blur();
  };

  multiplication.onclick = function (e) {
    result.textContent = result.textContent + "*";
    e.target.blur();
  };

  division.onclick = function (e) {
    result.textContent = result.textContent + "/";
    e.target.blur();
  };

  percentage.onclick = function (e) {
    result.textContent = result.textContent + "/100 *";
    e.target.blur();
  };

  dot.onclick = function (e) {
    result.textContent = result.textContent + ".";
    e.target.blur();
  };

  leftBracket.onclick = function (e) {
    result.textContent = result.textContent + "(";
    e.target.blur();
  };

  rightBracket.onclick = function (e) {
    result.textContent = result.textContent + ")";
    e.target.blur();
  };

  // Results & others
  equal.onclick = function (e) {
    let final = result.textContent;
    final = eval(final);
    result.textContent = final;
  };

  reset.onclick = function (e) {
    result.textContent = "";
    e.target.blur();
  };

  erase.onclick = function (e) {
    let mistake = result.textContent;
    mistake = mistake.slice(0, -1);
    result.textContent = mistake;
    e.target.blur();
  };

  // Keypress
  document.addEventListener("keypress", keyboardPress);

  function keyboardPress(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 49: //1
        result.textContent = result.textContent + "1";
        break;
      case 50: //2
        result.textContent = result.textContent + "2";
        break;
      case 51: //3
        result.textContent = result.textContent + "3";
        break;
      case 52: //4
        result.textContent = result.textContent + "4";
        break;
      case 53: //5
        result.textContent = result.textContent + "5";
        break;
      case 54: //6
        result.textContent = result.textContent + "6";
        break;
      case 55: //7
        result.textContent = result.textContent + "7";
        break;
      case 56: //8
        result.textContent = result.textContent + "8";
        break;
      case 57: //9
        result.textContent = result.textContent + "9";
        break;
      case 48: //0
        result.textContent = result.textContent + "0";
        break;
      case 43: // +
        result.textContent = result.textContent + "+";
        break;
      case 45: // -
        result.textContent = result.textContent + "-";
        break;
      case 42: // *
        result.textContent = result.textContent + "*";
        break;
      case 47: // /
        result.textContent = result.textContent + "/";
        break;
      case 37: // %
        result.textContent = result.textContent + "/100 *";
        break;
      case 46: // .
        result.textContent = result.textContent + ".";
        break;
      case 40: // .
        result.textContent = result.textContent + "(";
        break;
      case 41: // .
        result.textContent = result.textContent + ")";
        break;
      case 13: // Equal
        let final = result.textContent;
        final = eval(final);
        result.textContent = final;
        break;
    }
  }
}
