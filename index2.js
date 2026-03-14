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


    document.getElementById("heroSection").style.display = "none"

    document.getElementById("navbar").classList.remove("hidden")
    document.getElementById("vocabulary").classList.remove("hidden")
    document.getElementById("faq").classList.remove("hidden")
});


// Logout button cliked function 

const logoutBtn = document.getElementById("logout-btn")

logoutBtn.addEventListener("click", function () {

    document.getElementById("heroSection").style.display = "block"

    document.getElementById("navbar").classList.add("hidden")
    document.getElementById("vocabulary").classList.add("hidden")
    document.getElementById("faq").classList.add("hidden")

});

// 5️⃣ Load Lesson Buttons (API-01)

fetch("https://openapi.programming-hero.com/api/levels/all")
.then(res => res.json())
.then(data => showLessons(data.data))




