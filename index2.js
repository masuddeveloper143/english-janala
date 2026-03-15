


// Logout button cliked function 

// const logoutBtn = document.getElementById("logout-btn")

// logoutBtn.addEventListener("click", function () {

//     document.getElementById("hero-section").style.display = "block"
//     document.getElementById("navbar").style.display = "block"

//     // document.getElementById("navbar").classList.add("hidden")
//     // document.getElementById("vocabulary").classList.add("hidden")
//     // document.getElementById("faq").classList.add("hidden")

// });

// ---------------------------------------------------------------------------------------------------

// 5️⃣ Load Lesson Buttons (API-01)

fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then(data => showLessons(data.data))


function showLessons(levels) {

    const container = document.getElementById("lesson-container")

    levels.forEach(level => {

        const btn = document.createElement("button")

        btn.innerText = `Lesson ${level.level_no}`;

        btn.className = "bg-blue-500 text-white px-5 py-2 rounded",

            btn.onclick = () => loadWords(level.level_no)

        container.appendChild(btn)

    })

    // ----------------------------------------------------------------------------------------------

}


// 6️⃣ Load Words crad (API-02 clle)

function loadWords(level) {

    fetch(`https://openapi.programming-hero.com/api/level/${level}`)
        .then(res => res.json())
        .then(data => displayWords(data.data))

};


// 7️⃣ Show Words

function displayWords(words) {

    const container = document.getElementById("card-container")

    container.innerHTML = ""

    if (words.length === 0) {
        container.innerHTML = `<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_2.showModal()">data not found</button>
<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>`
        return
    }

    words.forEach(word => {

        const card = document.createElement("div")

        card.className = "bg-white p-5 rounded shadow"

        card.innerHTML = `


        <div class="bg-slate-200 p-10 rounded-md">
        <h1 class="font-bold text-center mb-2">${word.word}</h1>
        <p class="font-bold text-center mb-2">${word.meaning}</p>
        <h1 class="font-bold text-center mb-2">${word.pronunciation}</h1>
        <div class="flex items-center justify-between "> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" class="w-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg> </div>
             <div class="flex items-center justify-center">
                <button id="faq-btn" class="btn btn-soft btn-primary" onclick="loadDetails(${word.id})">
                    details
                </button>
            </div>
    </div>

     

`;

        {/* <h2 class="text-xl font-bold">${word.word}</h2>
<p>${word.meaning}</p>
<p>${word.pronunciation}</p>
<button onclick="loadDetails(${word.id})">Details</button> */}

        container.appendChild(card)

    })

}

// 8️⃣ Word Details (API-03)

function loadDetails(id) {

    fetch(`https://openapi.programming-hero.com/api/word/${id}`)
        .then(res => res.json())
        .then(data => {

            const word = data.data

            alert(`
Word: ${word.word}
Example: ${word.example}
Synonyms: ${word.synonyms}
`)

        })

}


// 9️⃣ Smooth Scroll FAQ BUTTON 

document.getElementById("faq-btn").addEventListener("click", function () {


    document.getElementById("faqs-ection").scrollIntoView({
        behavior: "smooth"
    });
});


// 9️⃣ Smooth Scroll lern BUTTON 


document.getElementById("learn-btn").addEventListener("click", function () {


    document.getElementById("vocabulary-section").scrollIntoView({
        behavior: "smooth"
    });
});

// 9️⃣ WINDOW.LOCATION.HREF LOGOUT BUTTON 
document.getElementById("logout-btn").addEventListener("click", function () {
    window.location.href = "login.html"
})

// function scrollToFAQ() {
//     document.getElementById("faqs-ection").scrollIntoView({
//         behavior: "smooth"
//     })
// }

// function scrollToLearn() {
//     document.getElementById("vocabulary-section").scrollIntoView({
//         behavior: "smooth"
//     })
// }


// 🔟 Loading Spinner


document.getElementById("spinner").classList.remove("hidden");






