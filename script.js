// ===============================
// AOS Animation
// ===============================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ===============================
// Typing Animation
// ===============================

const typingText = document.querySelector(".typing");

const words = [
    "Computer Science Student",
    "Frontend Developer",
    "UI/UX Enthusiast",
    "Machine Learning Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex++);
    } else {

        typingText.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;

    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// Close menu when clicking links

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ===============================
// Scroll Progress Bar
// ===============================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Smooth Fade-in
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card, .project-card, .timeline-item, .skill")
.forEach(el => observer.observe(el));


// ===============================
// Button Ripple Effect
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        button.style.setProperty("--x", x + "px");
        button.style.setProperty("--y", y + "px");

    });

});


// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 60) {

        header.style.boxShadow =
            "0 15px 35px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ===============================
// Scroll To Top Button
// ===============================

// Create Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);


// Show Button

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("showTop");

    } else {

        topBtn.classList.remove("showTop");

    }

});


// Scroll Top

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Console Greeting 😄
// ===============================

console.log(
`
======================================

Hello Recruiter 👋

Designed & Developed by

Sudhasmita Sahoo

======================================
`
);