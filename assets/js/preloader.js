// Preloader Code
setTimeout(function () {
    $('.loading').fadeToggle();
}, 450);

let preloader = document.getElementById('loading');
let loadFunction = function () {
    preloader.style.display = "none";
}