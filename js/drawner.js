const bar = document.querySelector(".bar__button");
const backBar = document.querySelector(".fa-arrow-left");

bar.addEventListener('click', () => {
    var drawner = document.querySelector(".drawner");
    drawner.classList.toggle('display');
})
backBar.addEventListener('click', () => {
    var drawner = document.querySelector(".drawner");
    drawner.classList.toggle('display');
})