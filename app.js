function startRecording() {
  const feedback = document.getElementById("feedback");
  feedback.textContent = "Dinleniyor...";

  setTimeout(() => {
    let userResponse = "wat iz yor neym";
    analyzeSpeech(userResponse);
  }, 3000);
}

function analyzeSpeech(text) {
  const feedback = document.getElementById("feedback");

  if (text.includes("what is your name")) {
    feedback.textContent = "🎉 Harika! Doğru telaffuz ettin.";
  } else {
    feedback.textContent = "🌀 Neredeyse! Birlikte tekrar edelim: 'What is your name?'";
  }
}