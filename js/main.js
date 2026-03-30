document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // reviews
    const reviews = [
        {
            text: "Juan is the most professional and knowledgeable plumber I’ve ever had do work for me. He answered all my questions without hesitation and was extremely clean with his work. I will be recommending Juan to all my friends.",
            author: "Doug W."
        },
        {
            text: "Juan came by to replace my shower cartridge. He did an excellent, quick job and made sure everything was in perfect working condition before he left. I definitely look forward to having him as a plumber in the future.",
            author: "Juliana J."
        },
        {
            text: "Juan was an amazing person and plumber. He knew what he was doing and cleaned up everything so well it looked like he was never here.",
            author: "Anthony"
        },
        {
            text: "Words cannot describe how kind and helpful Juan has been. Juan was always available for questions and truly advocated for us. I cannot say enough about how grateful we are for this company. I highly recommend them and will use them for future work.",
            author: "Cynthia D."
        }
    ];

    let reviewIndex = 0;
    let reviewTimer;

    function showReview(index) {
        const text = document.getElementById("reviewText");
        const author = document.getElementById("reviewAuthor");
        const dots = document.querySelectorAll(".review-dot");

        if (text && author) {
            text.textContent = reviews[index].text;
            author.innerHTML = `<img src="images/google.svg" alt="Google" class="review-icon"> ${reviews[index].author}`;
        }

        dots.forEach(function(dot, i) {
            dot.classList.toggle("active-dot", i === index);
        });
    }

    function nextReview() {
        reviewIndex++;
        if (reviewIndex >= reviews.length) {
            reviewIndex = 0;
        }
        showReview(reviewIndex);
    }

    function prevReview() {
        reviewIndex--;
        if (reviewIndex < 0) {
            reviewIndex = reviews.length - 1;
        }
        showReview(reviewIndex);
    }

    function startReviewTimer() {
        reviewTimer = setInterval(nextReview, 7000);
    }

    function resetReviewTimer() {
        clearInterval(reviewTimer);
        startReviewTimer();
    }

    showReview(reviewIndex);
    startReviewTimer();

    const nextBtn = document.getElementById("nextReview");
    const prevBtn = document.getElementById("prevReview");
    const dots = document.querySelectorAll(".review-dot");

    if (nextBtn) {
        nextBtn.addEventListener("click", function() {
            nextReview();
            resetReviewTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", function() {
            prevReview();
            resetReviewTimer();
        });
    }

    dots.forEach(function(dot) {
        dot.addEventListener("click", function() {
            reviewIndex = Number(dot.dataset.index);
            showReview(reviewIndex);
            resetReviewTimer();
        });
    });

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            this.classList.toggle("active");
            answer.classList.toggle("show");

            if (answer.classList.contains("show")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = "0";
            }
        });
    });
});

function hMenu() {
    event.stopPropagation();
    
    var menu = document.getElementById("links");
    var icon = document.getElementById("hamburger-icon");
    var header = document.querySelector(".site-header");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    header.classList.toggle("menu-open");
}

document.addEventListener('click', function (event) {
    const menu = document.getElementById("links");
    const icon = document.getElementById("hamburger-icon");
    const header = document.querySelector(".site-header");

    // If menu is open AND click is outside the header
    if (
        menu.classList.contains("open") &&
        !header.contains(event.target)
    ) {
        menu.classList.remove("open");
        icon.classList.remove("open");
        header.classList.remove("menu-open");
    }
});

const heroButtons = document.querySelectorAll(".hero-button");

heroButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        button.appendChild(ripple);

        setTimeout(function() {
            ripple.remove();
        }, 600);
    });
});
