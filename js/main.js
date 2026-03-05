document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
// reviews
    const reviews = [
        {
            text: "Juan is the most professional and knowledgeable plumber I’ve ever had do work for me. He answered all my questions without hesitation and was extremely clean with his work. I will be recommending Juan to all my friends.",
            author: "- Doug W."
        },
        {
            text: "Juan came by to replace my shower cartridge. He did an excellent, quick job and made sure everything was in perfect working condition before he left. I definitely look forward to having him as a plumber in the future",
            author: "- Juliana J."
        },
        {
            text: "Juan was an amazing person/plumber he knew what he was doing and cleaned up left no mess It looked like he was never here.",
            author: "- Anthony"
        },
        {
            text: "Words cannot describe how kind and helpful, Juan has been. We had some repairs done to our bathroom incorrectly by a restoration company and had to have it repaired. Juan came out right away and worked with us to ensure the restoration company corrected their mistakes. Juan was always available for questions and truly advocated for us. I cannot say enough about how grateful we are for this company. I highly recommend them and will use them for future work..",
            author: "- Cynthia D."
        }
    ];

    let reviewIndex = 0;

    function showReview() {
        const text = document.getElementById("reviewText");
        const author = document.getElementById("reviewAuthor");

        if (text && author) {
            text.textContent = reviews[reviewIndex].text;
            author.textContent = reviews[reviewIndex].author;
        }
    }

    function nextReview() {
        reviewIndex++;

        if (reviewIndex >= reviews.length) {
            reviewIndex = 0;
        }

        showReview();
    }

    showReview();

    setInterval(nextReview, 5000);


});