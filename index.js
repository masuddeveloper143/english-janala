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