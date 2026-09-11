```javascript
/* --------------------------------
   FOOD PREDICTION ANIMATION
-------------------------------- */

const predictionElement = document.getElementById("foodPrediction");

let prediction = 1150;
const targetPrediction = 1250;

const predictionTimer = setInterval(() => {

    prediction += 5;

    if (prediction >= targetPrediction) {
        prediction = targetPrediction;
        clearInterval(predictionTimer);
    }

    predictionElement.textContent =
        prediction.toLocaleString();

}, 30);


/* --------------------------------
   NGO MATCH
-------------------------------- */

function findMatch() {

    const matches = [
        "Community Food Bank is the best match with 96% compatibility.",
        "Helping Hands NGO can accept 75 meals immediately.",
        "Local Community Center can accept the complete surplus."
    ];

    const randomMatch =
        matches[Math.floor(Math.random() * matches.length)];

    alert("🤝 Smart Match Found!\n\n" + randomMatch);
}


/* --------------------------------
   JOIN BUTTON
-------------------------------- */

function showMessage() {

    alert(
        "🌱 Thank you for your interest in FoodWise AI!\n\n" +
        "Together, we can reduce food waste and redistribute surplus food to communities."
    );

}


/* --------------------------------
   CHART SELECTOR
-------------------------------- */

const chartSelect = document.getElementById("chartSelect");
const bars = document.querySelectorAll(".bar");

chartSelect.addEventListener("change", function () {

    if (this.value === "Last 30 Days") {

        const newHeights = [
            "85%", "62%", "92%", "72%",
            "80%", "67%", "88%"
        ];

        bars.forEach((bar, index) => {
            bar.style.height = newHeights[index];
        });

    } else {

        const defaultHeights = [
            "90%", "70%", "82%", "58%",
            "75%", "50%", "63%"
        ];

        bars.forEach((bar, index) => {
            bar.style.height = defaultHeights[index];
        });
    }

});


/* --------------------------------
   SIMPLE SCROLL ANIMATION
-------------------------------- */

const cards = document.querySelectorAll(
    ".problem-card, .process-card, .metric, .ngo"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "all 0.6s ease";

    observer.observe(card);

});


/* --------------------------------
   CONSOLE MESSAGE
-------------------------------- */

console.log(
    "FoodWise AI — Predict → Prevent → Detect → Match → Redistribute → Analyze"
);
```
