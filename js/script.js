
let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navbar');

const readMoreBtn = document.querySelector(".read-more-btn");
const hiddenText = document.querySelector(".hidden-text");
const mainText = document.querySelector(".main-text");
const maxLength = 800; // Maximum length of sliced text

// stricky header
let header = document.querySelector('header');
window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 100);
})

// for Menu Icon 
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('open');
}


document.addEventListener("DOMContentLoaded", function () {

    // Slice the main text and store it in hiddenText
    hiddenText.textContent = mainText.textContent.slice(maxLength);
    mainText.textContent = mainText.textContent.slice(0, maxLength);

    readMoreBtn.addEventListener("click", function (event) {
        event.preventDefault();
        mainText.textContent += hiddenText.textContent;
        hiddenText.style.display = "none"; // Hide the hidden text
        readMoreBtn.style.display = "none"; // Hide the "Read more" button
    });



});
