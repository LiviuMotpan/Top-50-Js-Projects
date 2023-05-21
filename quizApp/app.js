const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next-btn");
const questionContainerElement = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerBtnsElement = document.querySelector("#answer-buttons")

const questions = [
    {
        question: "What is 2 + 2",
        answers: [
            { text: "4",correct : true},
            { text: "22",correct : false},
        ]
    },
    {
        question: "Is web development fun?",
        answers: [
            { text: "KINDA",correct : true},
            { text: "YES!!",correct : false},
            { text: "Um no",correct : false},
            { text: "IDK",correct : false},
        ]
    }
]

let shuffleQuestions,currentQuestionIndex;

startBtn.addEventListener("click",startGame)
nextBtn.addEventListener("click",()=> {
    currentQuestionIndex++;
    setNextQuestion()
})

function startGame() {
    startBtn.classList.add("hide");
    shuffleQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        if(ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click",selectAnswer);
        answerBtnsElement.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add("hide");
    while(answerBtnsElement.firstChild) {
        answerBtnsElement.removeChild(answerBtnsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerBtnsElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffleQuestions.length > currentQuestionIndex+1) {
        nextBtn.classList.remove("hide")
    }else {
        startBtn.innerHTML = "Restart";
        startBtn.classList.remove("hide");
    }
}

function setStatusClass(element,correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct");
    }else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("wrong")
    element.classList.remove("correct")
}