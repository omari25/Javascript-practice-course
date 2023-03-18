const theScore = document.getElementById('score')
const message = document.getElementById('message')
const questions = document.querySelectorAll('.question');

function submitTest() {
  let score = 0;
  for (const question of questions) {
    const selectedOption = question.querySelector('input:checked');
    if (selectedOption && selectedOption.value === 'a') {
      score++;
    }
  }
  document.getElementById('result').style.display = 'block';
  theScore.innerText = (score / questions.length * 100).toFixed(2);

  if (theScore.innerText >= 80) {
    message.innerText = "Excellent"
  } else if (theScore.innerText >= 50) {
    message.innerText = "Average"
  } else if (theScore.innerText >= 30) {
    message.innerText = "You can do more"
  } else if (theScore.innerText <= 30) {
    message.innerText = "Poor"
  }

  document.querySelector('#test-form').reset()
}