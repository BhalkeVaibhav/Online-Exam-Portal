
  function toggleButton() {
    const checkbox = document.getElementById("agree");
    const button = document.getElementById("startBtn");
    button.disabled = !checkbox.checked;
  }

  function startExam() {
    window.location.href = "exam.html"; // Replace with your actual exam page
  }
