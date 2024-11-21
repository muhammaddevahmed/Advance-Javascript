$(document).ready(function () {
    $("#name").on("keyup", function () {
        let uname = $(this).val();
        let regexName = /^[a-z\s]{3,20}$/;
        if (!regexName.test(uname)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("data should be valid").css({
                "color": "red",
                "font-size": "bold",
                "margin": "2px"
            })

        }
        else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("data should be valid").css({
                "color": "green",
                "font-size": "bold",
                "margin": "2px"

            })
        }
    })
})

// Working on email

$(document).ready(function () {
    $("#email").on("keyup", function () {
        let uname = $(this).val();
        let regexName = /^[a-z\s]{3,20}$/;
        if (!regexName.test(uname)) {
            $(this).css("border", "2px solid red");
            $(this).next("small").html("data should be valid").css({
                "color": "red",
                "font-size": "bold",
                "margin": "2px"
            })

        }
        else {
            $(this).css("border", "2px solid green");
            $(this).next("small").html("data should be valid").css({
                "color": "green",
                "font-size": "bold",
                "margin": "2px"

            })
        }
    })
})