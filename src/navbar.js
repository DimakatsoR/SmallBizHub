const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {

        link.classList.add("active");

    } else {

        link.classList.remove("active");

    }

});


function setActiveNavLink() {

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        if (link.getAttribute("href") === currentPage) {

            link.classList.add("active");

        }

    });

}


function animateCounter(elementId, targetCount, duration = 2000) {

    const countSpan = document.getElementById(elementId);

    if (!countSpan) return;

    const increment = targetCount / (duration / 16);
    let currentCount = 0;

    const timer = setInterval(() => {

        currentCount += increment;

        if (currentCount >= targetCount) {

            currentCount = targetCount;
            clearInterval(timer);

        }

        countSpan.textContent = Math.floor(currentCount);

    }, 16);

}


document.addEventListener("DOMContentLoaded", function () {

    setActiveNavLink();

    animateCounter("Businesses", 100);
    animateCounter("Customers", 3000);
    animateCounter("Products", 200);

});