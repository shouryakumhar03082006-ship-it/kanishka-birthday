/* =====================================
   KANISHKA'S LITTLE PINK WORLD 🎀
   COMPLETE WEBSITE JAVASCRIPT
===================================== */


/* 1. PASSWORD SYSTEM */

const SECRET_PASSWORD = "kanishka20";

function unlockWebsite() {
    const input = document.getElementById("passwordInput");
    const error = document.getElementById("passwordError");
    const lockScreen = document.getElementById("lockScreen");
    const website = document.getElementById("website");

    if (input.value.trim().toLowerCase() === SECRET_PASSWORD) {

        lockScreen.style.display = "none";
        website.classList.remove("hidden");

        loadReasons();
        loadGifts();

        window.scrollTo(0, 0);

        celebrate();

    } else {
        error.textContent = "Oops! Wrong password. Try again 💗";
        input.value = "";
        input.focus();
    }
}


/* ENTER KEY PASSWORD SUPPORT */

document.addEventListener("DOMContentLoaded", function () {

    const passwordInput = document.getElementById("passwordInput");

    if (passwordInput) {
        passwordInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                unlockWebsite();
            }
        });
    }

});


/* 2. TWENTY REASONS */

const reasons = [
    "Your smile deserves its own fan club 💗",
    "You make ordinary moments special 🌷",
    "Your vibe is simply unmatched ✨",
    "You have your own kind of magic 🎀",
    "You deserve all the happiness in the world",
    "Your laugh makes moments brighter",
    "You are one of a kind 🧸",
    "You have main-character energy",
    "You make little things memorable",
    "You deserve endless good days",
    "Your personality is a whole vibe",
    "You have a beautiful heart 💕",
    "You bring sunshine wherever you go",
    "You should always believe in yourself",
    "You make this world a little sweeter",
    "You deserve every good opportunity",
    "You are stronger than you think",
    "You deserve to achieve your dreams",
    "You are worth celebrating every day",
    "Simply because you are YOU! 🎂"
];


function loadReasons() {

    const grid = document.getElementById("reasonGrid");

    if (!grid) return;

    grid.innerHTML = "";

    reasons.forEach(function (reason, index) {

        const card = document.createElement("div");

        card.className = "reason-card";

        card.innerHTML = `
            <span>💗</span>
            <p>${String(index + 1).padStart(2, "0")}. ${reason}</p>
        `;

        grid.appendChild(card);

    });

}


/* 3. TWENTY SURPRISE GIFTS */

const gifts = [

    {
        emoji: "🎀",
        title: "A Pink Bow",
        message: "A little reminder that your day deserves extra sparkle. Keep shining!"
    },

    {
        emoji: "🧸",
        title: "Teddy Hug",
        message: "Sending you a virtual teddy hug and lots of warm birthday wishes!"
    },

    {
        emoji: "🌷",
        title: "Flowers",
        message: "May your life bloom with happiness, beautiful opportunities and success."
    },

    {
        emoji: "💌",
        title: "Secret Note",
        message: "Here's a little secret: you deserve more happiness than you can imagine."
    },

    {
        emoji: "🍰",
        title: "Birthday Cake",
        message: "Calories don't count on birthday websites. Enjoy your virtual cake!"
    },

    {
        emoji: "✨",
        title: "Magic",
        message: "May your biggest dreams slowly turn into your favourite memories."
    },

    {
        emoji: "💗",
        title: "Heart",
        message: "A little heart full of good wishes, positive energy and happiness."
    },

    {
        emoji: "🦋",
        title: "Butterfly",
        message: "Keep growing, keep changing and keep becoming the person you dream of."
    },

    {
        emoji: "👑",
        title: "Queen Crown",
        message: "Today's your day. Own it with confidence and your signature vibe!"
    },

    {
        emoji: "🌈",
        title: "Rainbow",
        message: "May every new chapter bring beautiful colours into your life."
    },

    {
        emoji: "🎧",
        title: "Playlist",
        message: "Your birthday soundtrack: good music, happy memories and main-character energy."
    },

    {
        emoji: "🌸",
        title: "Cherry Blossom",
        message: "A reminder that beautiful things take time. Keep blooming."
    },

    {
        emoji: "⭐",
        title: "Star",
        message: "Never forget how much potential you have. Your future is full of possibilities."
    },

    {
        emoji: "🍓",
        title: "Strawberry",
        message: "A sweet little surprise for someone celebrating a very special day!"
    },

    {
        emoji: "🎁",
        title: "Mystery Box",
        message: "Plot twist: the best gift is a year filled with laughter, peace and adventures."
    },

    {
        emoji: "☁️",
        title: "Dream Cloud",
        message: "May you always have the courage to chase the dreams that make you happy."
    },

    {
        emoji: "💎",
        title: "Diamond",
        message: "You are capable of doing amazing things. Never underestimate yourself."
    },

    {
        emoji: "🫶",
        title: "Good Wishes",
        message: "Sending positive energy and the warmest wishes for your new year."
    },

    {
        emoji: "🥳",
        title: "Party Time",
        message: "It's your birthday! No stress, just smiles, cake and good vibes."
    },

    {
        emoji: "💝",
        title: "Final Surprise",
        message: "May this year become one of the most beautiful chapters of your life. Happy Birthday!"
    }

];


function loadGifts() {

    const grid = document.getElementById("giftGrid");

    if (!grid) return;

    grid.innerHTML = "";

    gifts.forEach(function (gift, index) {

        const card = document.createElement("button");

        card.className = "gift-card";
        card.type = "button";

        card.innerHTML = `
            <span>${gift.emoji}</span>
            <p>Gift ${String(index + 1).padStart(2, "0")}</p>
        `;

        card.addEventListener("click", function () {
            openGift(index);
        });

        grid.appendChild(card);

    });

}


function openGift(index) {

    const gift = gifts[index];

    if (!gift) return;

    const messageBox = document.getElementById("giftMessage");
    const messageText = document.getElementById("giftMessageText");
    const messageTitle = messageBox.querySelector("h3");
    const messageIcon = messageBox.querySelector(".gift-message-icon");

    messageIcon.textContent = gift.emoji;
    messageTitle.textContent = gift.title;
    messageText.textContent = gift.message;

    messageBox.classList.remove("show");

    void messageBox.offsetWidth;

    messageBox.classList.add("show");

    messageBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* 4. GEN-Z BIRTHDAY QUIZ */

const quizQuestions = [

    {
        question: "What's today's biggest vibe? 👀",
        options: [
            "Main character energy ✨",
            "Just another Monday 😭",
            "Sleep and repeat 💤",
            "No thoughts, just vibes"
        ],
        answer: 0,
        feedback: "Period! Today is YOUR main-character episode 💅"
    },

    {
        question: "Your birthday mood is giving...",
        options: [
            "Soft girl era 🎀",
            "CEO of everything 👑",
            "Delulu but happy ✨",
            "All of the above"
        ],
        answer: 3,
        feedback: "All of the above is the only correct answer. Iconic!"
    },

    {
        question: "Choose your birthday superpower!",
        options: [
            "Unlimited shopping 🛍️",
            "Teleport anywhere 🌍",
            "Read minds 👀",
            "Pause time ⏳"
        ],
        answer: 0,
        feedback: "Shopping without limits? That's a whole lifestyle!"
    },

    {
        question: "What's the ultimate birthday combo?",
        options: [
            "Cake + gifts 🎂",
            "Good music + good food 🎧",
            "Cute pictures + memories 📸",
            "Everything. Obviously!"
        ],
        answer: 3,
        feedback: "The standards are HIGH and honestly, valid!"
    },

    {
        question: "Final question: Who owns today?",
        options: [
            "The birthday girl 👑",
            "The cake 🎂",
            "The teddy bear 🧸",
            "The entire universe 🌍"
        ],
        answer: 0,
        feedback: "CORRECT! Kanishka is the moment. Happy Birthday! 💗"
    }

];


let currentQuiz = -1;
let quizAnswered = false;


function nextQuiz() {

    const questionElement = document.getElementById("quizQuestion");
    const optionsElement = document.getElementById("quizOptions");
    const feedbackElement = document.getElementById("quizFeedback");
    const nextButton = document.getElementById("nextQuizButton");

    if (currentQuiz === -1) {
        currentQuiz = 0;
    } else if (!quizAnswered) {
        feedbackElement.textContent = "Bestie, choose an answer first 😭";
        return;
    } else if (currentQuiz === quizQuestions.length - 1) {

        questionElement.textContent = "YOU PASSED THE VIBE CHECK! 🎀";

        optionsElement.innerHTML = `
            <div class="quiz-result">
                <h2>100% ICONIC 💗</h2>
                <p>Officially certified birthday queen.</p>
                <p>No further questions. You ate!</p>
            </div>
        `;

        feedbackElement.textContent = "Happy Birthday, Kanishka!";

        nextButton.style.display = "none";

        currentQuiz = -1;
        return;

    } else {
        currentQuiz++;
    }

    quizAnswered = false;

    const question = quizQuestions[currentQuiz];

    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";

    feedbackElement.textContent = "";

    nextButton.textContent = "Next Question →";

    question.options.forEach(function (option, index) {

        const button = document.createElement("button");

        button.className = "quiz-option";
        button.textContent = option;

        button.addEventListener("click", function () {

            if (quizAnswered) return;

            quizAnswered = true;

            const allOptions = optionsElement.querySelectorAll("button");

            allOptions.forEach(function (item) {
                item.disabled = true;
            });

            if (index === question.answer) {

                feedbackElement.textContent = question.feedback;

            } else {

                feedbackElement.textContent =
                    "Not quite! But the birthday girl is always right 😭💗";

            }

        });

        optionsElement.appendChild(button);

    });

}


/* 5. CELEBRATION ANIMATION */

function celebrate() {

    const emojis = [
        "🌸",
        "💗",
        "✨",
        "🎀",
        "🌷",
        "💕",
        "🦋",
        "⭐",
        "🧸",
        "🎉"
    ];

    for (let i = 0; i < 45; i++) {

        const emoji = document.createElement("span");

        emoji.className = "falling-emoji";

        emoji.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";

        emoji.style.fontSize =
            (18 + Math.random() * 22) + "px";

        emoji.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(emoji);

        setTimeout(function () {
            emoji.remove();
        }, 6500);

    }

}


/* 6. WEBSITE READY */

console.log("Kanishka's Little Pink World is ready! 🎀");