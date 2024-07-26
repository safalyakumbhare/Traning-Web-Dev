function check(event) {
  event.preventDefault(); // Prevent form submission

  let salary = document.forms["job"]["salaryexpt"].value;
  if (salary == "") {
    document.getElementById("salaryError").innerHTML = "Please enter salary";
  } else {
    document.getElementById("salaryError").innerHTML = "";
  }

  let file = document.forms["job"]["resume"].value;
  if (file === "") {
    document.getElementById("resumeError").innerHTML = "Please upload resume";
  } else {
    document.getElementById("resumeError").innerHTML = "";
  }

  let name = document.forms["job"]["empname"].value;
  if (name == "") {
    document.getElementById("nameError").innerHTML = "Please Enter your name";
  } else {
    document.getElementById("nameError").innerHTML = "";
  }

  let email = document.forms["job"]["email"].value;

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    document.getElementById("emailError").innerHTML = "";
  } else {
    document.getElementById("emailError").innerHTML = "You have entered an invalid email address!"

  }
  let phone = document.forms["job"]["phone"].value;
  if (phone == "") {
    document.getElementById("phoneError").innerHTML =
      "Please Enter your Phone Number";
  } else {
    document.getElementById("phoneError").innerHTML = "";
  }

  let address = document.forms["job"]["address"].value;
  if (address == "") {
    document.getElementById("addressError").innerHTML =
      "Please Enter your Address";
  } else {
    document.getElementById("addressError").innerHTML = "";
  }

  let date = document.forms["job"]["join"].value;
  if (date == "") {
    document.getElementById("dateError").innerHTML =
      "Please Enter your Date of Joining";
  } else {
    document.getElementById("dateError").innerHTML = "";
  }
}

/*Jquery Date picker*/
$(document).ready(function(){
  $("#join").datepicker();

  $("#btn").click(function(){
    alert("Thank You "+ $("#ename").val() +" for Applying for Job We Will Reach You soon.");
  });
});

