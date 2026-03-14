


// Logout button cliked function 

// const logoutBtn = document.getElementById("logout-btn")

// logoutBtn.addEventListener("click", function () {

//     document.getElementById("hero-section").style.display = "block"
//     document.getElementById("navbar").style.display = "block"

//     // document.getElementById("navbar").classList.add("hidden")
//     // document.getElementById("vocabulary").classList.add("hidden")
//     // document.getElementById("faq").classList.add("hidden")

// });

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

}


// 6️⃣ Load Words (API-02)

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
        container.innerHTML = "<h1>No Word Found</h1>"
        return
    }

    words.forEach(word => {

        const card = document.createElement("div")

        card.className = "bg-white p-5 rounded shadow"

        card.innerHTML = `
<h2 class="text-xl font-bold">${word.word}</h2>
<p>${word.meaning}</p>
<p>${word.pronunciation}</p>
<button onclick="loadDetails(${word.id})">Details</button>
`

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






