$(document).ready(function () {
    // Name validation
    $("#name").on("keyup", function () {
        let uname = $(this).val();
        let regexName = /^[\w\s]{3,20}$/i;
        if (!regexName.test(uname)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Name must be 3-20 characters").css({
                "color": "red",
                "font-weight": "bold",
                "margin": "2px",
            });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("Correct format").css({
                "color": "green",
                "font-weight": "bold",
                "margin": "2px",
            });
        }
    });

    // Email validation
    $("#email").on("keyup", function () {
        let uemail = $(this).val();
        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regexEmail.test(uemail)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Email contains").css({
                "color": "red",
                "font-weight": "bold",
                "margin": "2px",
            });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("Correct format").css({
                "color": "green",
                "font-weight": "bold",
                "margin": "2px",
            });
        }
    });

    // Password validation
    $("#password").on("keyup", function () {
        let uPassword = $(this).val();
        let regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,12}$/;
        if (!regexPassword.test(uPassword)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Password must be 8-12 characters long, with uppercase, lowercase, number, and special character").css({
                "color": "red",
                "font-weight": "bold",
                "margin": "2px",
            });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("Valid password").css({
                "color": "green",
                "font-weight": "bold",
                "margin": "2px",
            });
        }
    });

    // Confirm password validation
    $("#confirmPassword").on("keyup", function () {
        let cpassword = $(this).val();
        let upass = $("#password").val();
        if (cpassword !== upass) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Passwords do not match").css({
                "color": "red",
                "font-weight": "bold",
                "margin": "2px",
            });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("Passwords match").css({
                "color": "green",
                "font-weight": "bold",
                "margin": "2px",
            });
        }
    });

    // Check for empty inputs
    function EmptyInput(id) {
        if ($(id).val().trim() === "") {
            $(id).css("border", "2px solid red");
            $(id).next("small").html("This field is required").css({
                "color": "red",
                "font-weight": "bold",
                "margin": "2px",
            });
            return false;
        } else {
            $(id).css("border", "2px solid green");
            $(id).next("small").html(""); 
            return true;
        }
    }

    

   
    $("#registeration").click(function (e) {
        e.preventDefault(); 
    
        let validName = EmptyInput("#name");
        let validEmail = EmptyInput("#email");
        let validPassword = EmptyInput("#password");
        let validConfirmPassword = EmptyInput("#confirmPassword");
    
        if (!validName || !validEmail || !validPassword || !validConfirmPassword) {
            alert("Please fill in all required fields.");
        } else {
            let userData = {
                name: $("#name").val(),
                email: $("#email").val(),
                password: $("#password").val(),
            };
    
            // Save user data in localStorage
            localStorage.setItem("userData", JSON.stringify(userData));
    
            
            alert("Account registered successfully. Data saved in local storage.");
            window.location.replace('login.html'); 
        }
    });


    function loadUserData() {
        let storedData = localStorage.getItem("userData");
        if (storedData) {
            let userData = JSON.parse(storedData);
            console.log("Loaded User Data:", userData);
        }
    }

    
    loadUserData();
});



  