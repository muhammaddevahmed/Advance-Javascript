$(document).ready(function () {
    // Name validation
    $("#name").on("keyup", function() {
        let uname = $(this).val();
        let regexName = /^[a-z\s]{3,20}$/i; 
        if (!regexName.test(uname)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Data should be valid").css({
                "color": "red",
                "font-size": "bold",
                "margin": "2px"
            });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("Correct format").css({
                "color": "green",
                "font-size": "bold",
                "margin": "2px"
            });
        }
    });

    // Email validation
    $("#email").on("keyup", function () {
        let email = $(this).val();
        
        let regexEmail= /^[\w]{1,}[@][a-z]{5,9}[.][a-z]{3,3}$/;
        if (!regexEmail.test(email)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Data should be valid").css({
                "color": "red",
                "font-size": "bold",
                "margin": "2px"
            });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("Correct format").css({
                "color": "green",
                "font-size": "bold",
                "margin": "2px"
            });
        }
    });




    // password validation
    $("#password").on("keyup", function () {
        let uPassword = $(this).val();
        
        let regexPassword= /^[A-Z]{1,}[a-z]{1,}[$?&@!_]{1}[\d]{1,}$/;
        if (!regexPassword.test(uPassword)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("Data should be valid").css({
                "color": "red",
                "font-size": "bold",
                "margin": "2px"
            });
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("Correct format").css({
                "color": "green",
                "font-size": "bold",
                "margin": "2px"
            });
        }
    });
});