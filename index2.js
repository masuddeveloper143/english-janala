const gretStratbtn = document.getElementById("loginBtn");


// login section 
gretStratbtn.addEventListener("click", function () {
    // .trim() use korle space thakleo problem hobe na
    const inpuNmae = document.getElementById("nameinput").value.trim();
    const inpuPassword = document.getElementById("passwordinput").value.trim();

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

 

