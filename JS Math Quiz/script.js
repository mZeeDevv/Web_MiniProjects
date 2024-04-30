let currentQuestion = null;
let correctAnswers = 0;
let totalQuestions = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = ['+', '-', '×', '÷'][Math.floor(Math.random() * 4)];
    let answer;
    let questionText;

    switch (operation) {
        case '+':
            answer = num1 + num2;
            questionText = `What is ${num1} + ${num2}?`;
            break;
        case '-':
            answer = num1 - num2;
            questionText = `What is ${num1} - ${num2}?`;
            break;
        case '×':
            answer = num1 * num2;
            questionText = `What is ${num1} × ${num2}?`;
            break;
        case '÷':
            answer = num1 / num2;
            questionText = `What is ${num1} ÷ ${num2}? (Round to 2 decimal places)`;
            answer = answer.toFixed(2); // Round to 2 decimal places
            break;
    }

    currentQuestion = { questionText, answer };
    document.getElementById('question').innerText = questionText;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    if (userAnswer === '') {
        alert('Please enter your answer!');
        return;
    }

    if (parseFloat(userAnswer) === currentQuestion.answer) {
        correctAnswers++;
    }
    totalQuestions++;
    displayResult();
}

function nextQuestion() {
    document.getElementById('answer').value = '';
    generateQuestion();
    displayResult();
}

function displayResult() {
    if (totalQuestions > 0) {
        const score = ((correctAnswers / totalQuestions) * 100).toFixed(2);
        document.getElementById('result').innerText = `Score: ${score}% (${correctAnswers}/${totalQuestions})`;
    } else {
        document.getElementById('result').innerText = '';
    }
}

generateQuestion();
displayResult();
