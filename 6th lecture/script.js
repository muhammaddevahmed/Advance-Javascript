$(document).ready(function () {
    // Name validation
    $("#name").on("keyup", function () {
        let uname = $(this).val();
        let regexName = /^[a-z\s]{3,20}$/i; // Allow alphabets and spaces (case-insensitive)
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
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Correct email regex
        if (!emailRegex.test(email)) {
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
