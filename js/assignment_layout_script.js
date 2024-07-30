// My Javascript Validation
// function check(event) {
//   event.preventDefault(); // Prevent form submission

//   let salary = document.forms["job"]["salaryexpt"].value;
//   if (salary == "") {
//     document.getElementById("salaryError").innerHTML = "Please enter salary";
//   } else {
//     document.getElementById("salaryError").innerHTML = "";
//   }

//   let file = document.forms["job"]["resume"].value;
//   if (file === "") {
//     document.getElementById("resumeError").innerHTML = "Please upload resume";
//   } else {
//     document.getElementById("resumeError").innerHTML = "";
//   }

//   let name = document.forms["job"]["empname"].value;
//   if (name == "") {
//     document.getElementById("nameError").innerHTML = "Please Enter your name";
//   } else {
//     document.getElementById("nameError").innerHTML = "";
//   }

//   let email = document.forms["job"]["email"].value;

//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//     document.getElementById("emailError").innerHTML = "";
//   } else {
//     document.getElementById("emailError").innerHTML = "You have entered an invalid email address!"

//   }
//   let phone = document.forms["job"]["phone"].value;
//   if (phone == "") {
//     document.getElementById("phoneError").innerHTML =
//       "Please Enter your Phone Number";
//   } else {
//     document.getElementById("phoneError").innerHTML = "";
//   }

//   let address = document.forms["job"]["address"].value;
//   if (address == "") {
//     document.getElementById("addressError").innerHTML =
//       "Please Enter your Address";
//   } else {
//     document.getElementById("addressError").innerHTML = "";
//   }

//   let date = document.forms["job"]["join"].value;
//   if (date == "") {
//     document.getElementById("dateError").innerHTML =
//       "Please Enter your Date of Joining";
//   } else {
//     document.getElementById("dateError").innerHTML = "";
//   }
// }

/*Jquery Date picker*/
$(document).ready(function () {
  $("#join").datepicker();
});

$.validator.setDefaults({
  submitHandler: function(form) {
    alert("Form submitted");
  }
});
// jQuery Validation
$(document).ready(function () {
  $("#job-apply").validate({
    rules: {
      relocate: { required: true },
      join: "required",
      empname: "required",
      salaryexpt: {
        required: true,
        number: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10
      },

      address: "required",
      resume: {
        required: true,
      },
    },
    messages: {
      relocate: "Please select whether you are ready to relocate",
      join: "Please enter joining date",
      empname: "Please enter employee name",
      salaryexpt: {
        required: "Please enter expected salary",
        number: "Please enter a valid salary",
      },
      email: {
        required: "Please enter email address",
        email: "Please enter a valid email",
      },
      phone: {
        required: "Please enter phone number",
        number: "Please enter a valid phone number",
        minlength : "Invalid Phone Number",
        maxlength : "Invalid Phone Number",
        
      },
      address: "Please enter your address",
      resume: { required: "Please upload your resume" },
    },
  });
});
