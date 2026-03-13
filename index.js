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
    .then(data => btnLesson(data.data));



// btn-lesson-7 api clle 
function btnLesson(levels) {
    // console.log(btnLesson7);
    const btnLesson6 = document.getElementById("btn-lesson-7");

    for (let level of levels) {
        const button = document.createElement("button");
        button.innerText = `
        
         <button class="btn btn-soft btn-primary">


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>


                    Lesson-1

                </button>
        
        `;
        button.classList.add("btn");

        btnLesson6.appendChild(button);
    }
};
