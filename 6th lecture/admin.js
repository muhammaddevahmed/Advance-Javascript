$(document).ready(function () {
    
    let storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
        $("#userDetails").html(`
            <h4>Name: ${storedUserData.name}</h4>
            <h4>Email: ${storedUserData.email}</h4>
            <h4>Password: ${storedUserData.password}</h4>
        `);
    } else {
        alert("No user data found. Please login again.");
        
        window.location.href = "login.html";  
    }

    // Delete Button
    $("#deleteBtn").click(function () {
        localStorage.removeItem("userData");
        alert("Account deleted successfully.");
        window.location.href = "register.html";  
    });

    // Logout Button
    $("#logoutBtn").click(function () {
        window.location.href = "login.html";  
    });
});
