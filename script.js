document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Correct answers
  const correctAnswers = {
    q1: "4",
    q2: "Paris"
  };

  let score = 0;
  let totalQuestions = Object.keys(correctAnswers).length;

  // Check each question
  for (let key in correctAnswers) {
    const answer = document.querySelector(`input[name="${key}"]:checked`);
    if (answer && answer.value === correctAnswers[key]) {
      score++;
    }
  }

  // Display the result
  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${totalQuestions}.`;
  result.style.color = score === totalQuestions ? "green" : "red";
});
