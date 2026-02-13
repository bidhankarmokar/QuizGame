const quizQuestions = [
  {
    question: "What is the official name of Bangladesh?",
    options: [
      { text: "a. Republic of Bangladesh", isCorrect: false },
      { text: "b. People's Republic of Bangladesh", isCorrect: true },
      { text: "c. Democratic Republic of Bangladesh", isCorrect: false },
      { text: "d. Islamic Republic of Bangladesh", isCorrect: false },
    ],
    marks: 2,
  },
  {
    question: "In which year did Bangladesh achieve independence?",
    options: [
      { text: "a. 1947", isCorrect: false },
      { text: "b. 1952", isCorrect: false },
      { text: "c. 1971", isCorrect: true },
      { text: "d. 1990", isCorrect: false },
    ],
    marks: 2,
  },
  {
    question: "What is the national fruit of Bangladesh?",
    options: [
      { text: "a. Mango", isCorrect: false },
      { text: "b. Jackfruit", isCorrect: true },
      { text: "c. Watermelon", isCorrect: false },
      { text: "d. Litchi", isCorrect: false },
    ],
    marks: 2,
  },
  {
    question: "Which river is the longest in Bangladesh?",
    options: [
      { text: "a. Padma", isCorrect: false },
      { text: "b. Meghna", isCorrect: true },
      { text: "c. Jamuna", isCorrect: false },
      { text: "d. Surma", isCorrect: false },
    ],
    marks: 2,
  },
  {
    question:
      "What is the name of the world's largest mangrove forest located in Bangladesh?",
    options: [
      { text: "a. Amazon", isCorrect: false },
      { text: "b. Bhitarkanika", isCorrect: false },
      { text: "c. Sundarbans", isCorrect: true },
      { text: "d. Pichavaram", isCorrect: false },
    ],
    marks: 2,
  },
  {
    question: "Who is the national poet of Bangladesh?",
    options: [
      { text: "a. Rabindranath Tagore", isCorrect: false },
      { text: "b. Jasimuddin", isCorrect: false },
      { text: "c. Kazi Nazrul Islam", isCorrect: true },
      { text: "d. Jibanananda Das", isCorrect: false },
    ],
    marks: 2,
  },
  {
    question: "What is the currency of Bangladesh?",
    options: [
      { text: "a. Rupee", isCorrect: false },
      { text: "b. Taka", isCorrect: true },
      { text: "c. Dollar", isCorrect: false },
      { text: "d. Riyal", isCorrect: false },
    ],
    marks: 2,
  },
  {
    question: "Which city is known as the 'City of Mosques' in Bangladesh?",
    options: [
      { text: "a. Chittagong", isCorrect: false },
      { text: "b. Sylhet", isCorrect: false },
      { text: "c. Dhaka", isCorrect: true },
      { text: "d. Khulna", isCorrect: false },
    ],
    marks: 2,
  },
  {
    question: "How many administrative divisions are there in Bangladesh?",
    options: [
      { text: "a. 7", isCorrect: false },
      { text: "b. 8", isCorrect: true },
      { text: "c. 9", isCorrect: false },
      { text: "d. 10", isCorrect: false },
    ],
    marks: 2,
  },
  {
    question:
      "Which beach in Bangladesh is the longest natural sea beach in the world?",
    options: [
      { text: "a. Kuakata", isCorrect: false },
      { text: "b. Patenga", isCorrect: false },
      { text: "c. Cox's Bazar", isCorrect: true },
      { text: "d. Inani", isCorrect: false },
    ],
    marks: 2,
  },
];

// Dom
const startFace = document.querySelector(".startFace");
const questionFace = document.querySelector(".questionFace");
const resultFace = document.querySelector(".resultFace");
const question = document.querySelector(".question");
const questionIndex = document.querySelectorAll(".questionIndex");
const totalQuestion = document.querySelector(".totalQuestion");
const score = document.querySelectorAll(".score");
const totalScore = document.querySelectorAll(".totalScore");
const questionOptions = document.querySelector(".questionOptions");
const fill = document.querySelector(".fill");
let currentIndex = 0;
let currentScore = 0;
let canClick = true;

const startGame = () => {
  currentIndex = 0;
  currentScore = 0;
  canClick = true;
  startFace.style.display = "none";
  questionFace.style.display = "block";
  resultFace.style.display = "none";
  loadQuestions();
};

const loadQuestions = () => {
  canClick = true;
  if (currentIndex === quizQuestions.length) {
    showResult();
    questionFace.style.display = "none";
    return;
  }
  totalQuestion.textContent = quizQuestions.length;
  totalScore.forEach((ts) => {
    ts.textContent = quizQuestions.length * 2;
  });
  questionIndex.forEach((q) => {
    q.textContent = currentIndex + 1;
  });
  const currentQuestion = quizQuestions[currentIndex];
  question.textContent = "." + currentQuestion.question;
  questionOptions.innerHTML = "";
  currentQuestion.options.forEach((opt) => {
    const li = document.createElement("li");
    li.textContent = opt.text;
    li.onclick = () => {
      if (canClick) {
        canClick = false;
        if (opt.isCorrect === true) {
          li.classList.add("correct");
          currentScore += currentQuestion.marks;
          score.forEach((s) => {
            s.textContent = currentScore;
          });
        } else {
          li.classList.add("wrong");
        }
      }
      setTimeout(() => {
        currentIndex++;
        loadQuestions();
      }, 1000);
    };
    questionOptions.appendChild(li);
  });
   const progress = ((currentIndex) / quizQuestions.length) * 100;
   fill.style.width = `${progress}%`
};

const showResult = () => {
  resultFace.style.display = "block";
};

const quitGame = () => {
  location.reload();
};

