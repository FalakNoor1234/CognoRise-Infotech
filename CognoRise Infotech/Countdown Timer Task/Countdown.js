let countdownInterval;
let remainingTime = 0;
let paused = false;

function startCountdown() {
  const dateInput = document.getElementById("date-input").value;
  const timeInput = document.getElementById("time-input").value;

  if (!dateInput || !timeInput) {
    alert("Please select both date and time.");
    return;
  }

  const targetDateTime = new Date(`${dateInput}T${timeInput}`).getTime();
  const now = new Date().getTime();
  
  remainingTime = targetDateTime - now;

  if (remainingTime <= 0) {
    alert("Please select a future date and time.");
    return;
  }

  if (countdownInterval) {
    clearInterval(countdownInterval); // Clear any previous countdown
  }

  countdownInterval = setInterval(() => updateTimer(), 1000);
  paused = false;
}

function updateTimer() {
  if (paused) return;

  if (remainingTime <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerText = "Time's Up!";
    document.getElementById("alarm-sound").play();
    return;
  }

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Gradually change background color as time decreases
  const totalSeconds = remainingTime / 1000;
  const remainingPercentage = remainingTime / (totalSeconds * 1000);
  document.querySelector(".timer").style.backgroundColor = `rgba(76, 175, 80, ${remainingPercentage})`;

  remainingTime -= 1000; // Decrease remaining time by 1 second
}

function pauseCountdown() {
  paused = true;
}

function resumeCountdown() {
  paused = false;
}
