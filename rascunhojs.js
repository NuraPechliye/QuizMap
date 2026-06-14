//AQUI COMEECA O QUIZZZZ

const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnqntd = document.querySelector(".spnqntd");
const textfinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentfinish = document.querySelector(".finish");
const btnrestart = document.querySelector(".finish button");

let currentIndex = 0; //uma especie de contador para saber a questao q ta rodando na hora
let questionsCorrect = 0; //outro para questoes corretas

btnrestart.onclick = () => {
    content.style.display = "flex";
    contentfinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
}

function tocar(musica){
    const player = document.getElementById("player");
    player.src = musica;
    player.play();
}

//devemos colocar um e entre parenteses pq ele ta escutando o click do botao p passar
function nextQuestion(e) {
    if (e.target.dataset.correct === "true") {
    questionsCorrect++;
}

    if(currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish () {
    textfinish.innerHTML = `Você acertou ... ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentfinish.style.display = "flex";
}

function loadQuestion() {
    spnqntd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class= "answer" data-correct="${answer.correct}">
        ${answer.option}
        </button>
        `;

        answers.appendChild(div);

    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);

    });
}

loadQuestion();