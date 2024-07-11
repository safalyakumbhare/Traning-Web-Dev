function add(event) {
    event.preventDefault();
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("total").innerHTML = "Result : " +result;
  }
  function sub(event) {
    event.preventDefault();
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("total").innerHTML = "Result : " +result;
  }
  function mul(event) {
    event.preventDefault();
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("total").innerHTML = "Result : " +result;
  }
  function div(event) {
    event.preventDefault();
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 / num2;
    document.getElementById("total").innerHTML = "Result : " +result;
  }