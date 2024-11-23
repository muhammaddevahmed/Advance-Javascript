$(document).ready(function () {
    $("#loginBtn").click(function () {
        let email = $("#loginEmail").val();
        let password = $("#loginPassword").val();

        let storedUserData = JSON.parse(localStorage.getItem("userData"));

        if (storedUserData) {
            if (email === storedUserData.email && password === storedUserData.password) {
                alert("Login successful!");
                window.location.href = "admin.html"; 
            } else {
                alert("Invalid email or password!");
            }
        } else {
            alert("No user found. Please register first.");
        }
    });
});
