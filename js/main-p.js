
  const questions = [
    { question: "1. Capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], correct: 1 },
    { question: "2. 5 x 5 = ?", options: ["10", "20", "25", "15"], correct: 2 },
    { question: "3. HTML stands for?", options: ["Hot Mail", "Hyper Text", "HighText", "Hyper Text Markup Language"], correct: 3 },
    { question: "4. Largest planet?", options: ["Mars", "Jupiter", "Earth", "Saturn"], correct: 1 },
    { question: "5. 1 byte = ?", options: ["8 bits", "16 bits", "32 bits", "64 bits"], correct: 0 },
    { question: "6. CSS used for?", options: ["Database", "Styling", "Logic", "Backend"], correct: 1 },
    { question: "7. 1000 meters = ?", options: ["1 mm", "1 cm", "1 km", "1 mile"], correct: 2 },
    { question: "8. JS is?", options: ["Markup", "Scripting", "Database", "Language"], correct: 1 },
    { question: "9. 10 / 2 = ?", options: ["4", "6", "5", "3"], correct: 2 },
    { question: "10. CPU stands for?", options: ["Central Program Unit", "Computer Processing", "Central Processing Unit", "Control Panel Unit"], correct: 2 },
  ];

  let current = 0;
  let score = 0;

  function showQuestion(index) {
    const q = questions[index];
    const container = document.getElementById('questionBox');
    let html = `<h5>${q.question}</h5><form id="quizForm">`;

    q.options.forEach((opt, i) => {
      html += `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="answer" id="opt${i}" value="${i}">
          <label class="form-check-label" for="opt${i}">${opt}</label>
        </div>`;
    });

    html += `</form>`;
    container.innerHTML = html;
  }

  function nextQuestion() {
    const form = document.getElementById('quizForm');
    const selected = form.querySelector('input[name="answer"]:checked');

    if (!selected) {
      alert("Please select an answer.");
      return;
    }

    if (parseInt(selected.value) === questions[current].correct) {
      score++;
    }

    current++;

    if (current < questions.length) {
      showQuestion(current);
    } else {
      clearInterval(timerInterval);
      showResult();
    }
  }

  function showResult() {
    const resultText = `You scored ${score} out of ${questions.length}`;
    document.getElementById('resultText').innerText = resultText;
    const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
  }

  // Timer
  let time = 600; // 10 minutes
  const timerDisplay = document.getElementById('time');
  const timerInterval = setInterval(() => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    time--;

    if (time < 0) {
      clearInterval(timerInterval);
      showResult();
    }
  }, 1000);

  // Init
  showQuestion(current);
