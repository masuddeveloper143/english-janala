const gretStratbtn = document.getElementById("loginBtn")

gretStratbtn.addEventListener("click", function(){

const inpuNmae =document.getElementById("nameInput").value
const inpuPassword =document.getElementById("passwordInput").value

if(inpuNmae === " "){
    alert("Please Enter Your name");
    return;
};

if(inpuPassword !== ("123456") ){
     alert("Password Must be 123456");
     return;
}

alert("login successful")

});