let question, questionNumber, answerBox;
let questions = [
    "What is the basic unit of life?",
    "What gas do humans breathe in to survive?",
    "What force pulls objects toward Earth?",
    "What planet do we live on?",
    "What state of matter is ice?",
    "What part of a plant absorbs water?",
    "What star is at the center of our solar system?",
    "What process do plants use to make food?",
    "What tool measures temperature?",
    "What do you call animals that eat plants?"
];

let answers = [
    "Cell",
    "Oxygen",
    "Gravity",
    "Earth",
    "Solid",
    "Roots",
    "Sun",
    "Photosynthesis",
    "Thermometer",
    "Herbivores"
];
function startQuiz() {
    document.getElementById("startQuiz").style.display = "none";
    document.getElementById("quizContainer").style.display = 'block';
    setQuestion();
}
function submitAnswer() {
    answerBox = document.getElementById("answerBox");
    if (!answerBox) return console.error("answerBox element not found");

    let answer = answerBox.value.trim().toLowerCase();
    document.getElementById("quizContainer").style.display = "none";
    const correctOverlay = document.getElementById("correctOverlay");
    const wrongOverlay = document.getElementById("wrongOverlay");

    if (answer === answers[questionNumber].toLowerCase()) {
        correctOverlay.style.display = "block";
        correctOverlay.style.zIndex = 100;
        wrongOverlay.style.display = "none";
    } else {
        console.log("wrong")
        wrongOverlay.style.display = "block";
        correctOverlay.style.display = "none";
        wrongOverlay.style.zIndex = 100;
    }
    answerBox.value = "";
}

function nextQuestion() {
    const wrongOverlay = document.getElementById("wrongOverlay");
    const correctOverlay = document.getElementById("correctOverlay");
    if (wrongOverlay) wrongOverlay.style.display = "none";
    if (correctOverlay) correctOverlay.style.display = "none";
    document.getElementById("quizContainer").style.display = 'block';
    setQuestion();
}
function setQuestion() {
    question = document.getElementById("question");
    questionNumber = Math.floor(Math.random() * questions.length);
    question.textContent = questions[questionNumber];
}