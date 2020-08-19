// video switch buttons

const switch_btn = document.querySelector(".switch-btn");
const switch_animation = document.querySelector(".switch");
const video = document.querySelector(".video-container");

// video switch animation
switch_btn.addEventListener('click', () => {
    switch_animation.classList.toggle("slide");
    if (!switch_animation.classList.contains("slide")) {
        video.play();
    } else {
        video.pause();
    }
});

// preloader

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
})