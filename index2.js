const gretStratbtn = document.getElementById("login-btn");


// login section 
gretStratbtn.addEventListener("click", function () {
    // .trim() use korle space thakleo problem hobe na
    const inpuNmae = document.getElementById("name-input").value.trim();
    const inpuPassword = document.getElementById("password-input").value.trim();

    if (inpuNmae === "masud" && inpuPassword === "123456") {
        alert("Login successful");
        // Ekhane apni chaile onno page-e niye jete paren
        // window.location.href = "dashboard.html"; 
    }
    else if (inpuNmae !== "masud") {
        alert("Please enter the correct name"); // Console-er poriborte Alert
    }
    else {
        alert("Password must be 123456");
    }
});



