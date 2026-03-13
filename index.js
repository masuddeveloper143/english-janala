document.getElementById('frequently-section').style.display = "none";


document.getElementById('faq-btn').addEventListener('click', function () {

    document.getElementById('frequently-section').style.display = "block";
    document.getElementById('crad-section').style.display = "none";
    document.getElementById('Lets-Learn').style.display = "none";
    document.getElementById('hero-section').style.display = "none";

});



// document.getElementById('Lets-Learn').style.display = "none";

document.getElementById('learn-btn').addEventListener('click', function () {

    document.getElementById('Lets-Learn').style.display = "block";
    document.getElementById('crad-section').style.display = "none";
    document.getElementById('frequently-section').style.display = "none";
    document.getElementById('hero-section').style.display = "none";

});

// --------------------------------------------------------------------------------------------
// btn-lesson-7 api clle 👇
fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(data => btnLesson(data.data));
 
function btnLesson(levels) {
    // console.log(btnLesson7);
    const btnLesson6 = document.getElementById("btn-lesson-7");

    for(let level of levels){
        const button = document.createElement("button");
        button.innerText = `lesson ${level.level_no}`;
        button.classList.add("btn", "hover:bg-blue-500","hover:text-white", "border","border-blue-500");


        btnLesson6.appendChild(button);
    }
};

// ------------------------------------------------------------------------------------------------------------------------


fetch("https://openapi.programming-hero.com/api/level/5")
.then(res => res.json())
.then(data => cradBox(data.data));

function cradBox (level){
    
}