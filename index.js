document.getElementById('frequently-section').style.display = "none";


document.getElementById('faq-btn').addEventListener('click', function () {

    document.getElementById('frequently-section').style.display = "block";
    document.getElementById('crad-section').style.display = "none";
    document.getElementById('Lets-Learn').style.display = "none";
    document.getElementById('hero-section').style.display = "none";

});



document.getElementById('Lets-Learn').style.display = "none";

document.getElementById('learn-btn').addEventListener('click', function () {

    document.getElementById('Lets-Learn').style.display = "block";
    document.getElementById('crad-section').style.display = "none";
    document.getElementById('frequently-section').style.display = "none";
    document.getElementById('hero-section').style.display = "none";

});

fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(data => btnLesson7(data.data));



// btn-lesson-7 api clle 
function btnLesson7(btnlesson7) {
    // console.log(btnLesson7);
    const btnLesson6 = document.getElementById("btn-lesson-7");

    for(let level of btnLesson7){
        const btn7 = document.createElement("button");
        btn7.innerText = `level ${level.level_no}`;

        btnLesson6.appendChild(btn7);
    }
};